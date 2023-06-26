import _ from "lodash";
import { useEffect, useRef, useState } from "react";
import type { UIEvent } from "react";
import { MdArrowDropUp, MdArrowDropDown } from "react-icons/md";

interface IScrollablePickerStyle {
  height?: string;
  width?: string;
}

interface IScrollPicker {
  data: string[];
  defaultValue: string; // 초기 선택되어야할 값
  getNewContent?: (content: string) => void;
  styles?: IScrollablePickerStyle;
}

/**
 * @description 스크롤이 되는 선택 컴포넌트
 */
export default function ScrollablePicker({ data, defaultValue, getNewContent, styles }: IScrollPicker) {
  let initIndex = data.findIndex((item) => item === defaultValue); // 초기값의 index 찾기

  if (initIndex < 0) {
    // 초기 데이터가 없으면 맨 첫 데이터를 초기값으로 지정
    initIndex = 0;
  }

  const { height = "h-32", width = "w-20" } = styles || {};
  const [focusIndex, setFocusIndex] = useState(initIndex);
  const scrollRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<number>(0); // 부모로 업데이트되는 처리를 위한 ref
  const initScrollRef = useRef<boolean>(false); // 초기 데이터로 스크롤을 이동하기 위한 ref

  const wrapperClassName = `w-full overflow-auto scrollbar-hide ${height}`;

  /**
   * @description data list 부분 스크롤 이벤트
   * @param e HTMLDivElement target
   */
  const onScrollEvent = (e: UIEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    const index = Math.round(target.scrollTop / 40);
    const moveScrollTop = index * 40;

    target.scrollTo({
      top: moveScrollTop,
    });

    if (focusIndex !== index) {
      setFocusIndex(index);
    }
  };

  /**
   * @description 스크롤 이동하기
   * @param blockHeight 블럭의 높이
   * @returns 해당 값의 index
   */
  const moveScroll = (blockHeight: number) => {
    if (!scrollRef || !scrollRef.current) {
      return -1;
    }

    const { scrollTop } = scrollRef.current;

    const index = Math.round(scrollTop / 40);
    const moveScrollTop = index * 40 + blockHeight;

    scrollRef.current.scrollTo({
      top: moveScrollTop,
    });

    return index;
  };

  /**
   * @description 한 블럭 위로 이동하기
   */
  const moveUpOneBlock = () => {
    const index = moveScroll(-40);

    if (index > -1) {
      setFocusIndex(index);
    }
  };

  /**
   * @description 한 블럭 아래로 이동하기
   */
  const moveDownOneBlock = () => {
    const index = moveScroll(40);

    if (index > -1) {
      setFocusIndex(index);
    }
  };

  /**
   * @description 변화가 일어났을 때 부모에게 값 전달 (delay 500ms)
   */
  useEffect(() => {
    if (getNewContent) {
      if (timeoutRef.current > 0) {
        // 기존 timeout이 있다면 clear
        window.clearTimeout(timeoutRef.current);
        timeoutRef.current = 0;
      }

      const content = data[focusIndex];

      timeoutRef.current = window.setTimeout(() => {
        getNewContent(content);
      }, 500);
    }
  }, [data, focusIndex, getNewContent]);

  /**
   * @description 최초 한 번 전달받은 초기값으로 스크롤 이동하기
   */
  useEffect(() => {
    if (!initScrollRef.current) {
      moveScroll(focusIndex * 40);
      initScrollRef.current = true;
    }
  }, [focusIndex]);

  return (
    <div className={`${width} flex flex-col max-sm:flex-row`}>
      <div className="self-center">
        <button className="btn btn-ghost btn-circle btn-sm" onClick={moveUpOneBlock} type="button">
          <MdArrowDropUp className="h-5 w-5" />
        </button>
      </div>
      <div className={wrapperClassName} onScroll={_.throttle(onScrollEvent, 800)} ref={scrollRef}>
        <div className="relative w-full">
          <div className="w-full h-10 sticky top-10 rounded-md bg-accent overflow-hidden" />
          <ul className="w-full h-full flex flex-col items-center">
            {data.map((content, index) => {
              const isFocus = focusIndex === index;

              const contentClassName = `h-10 flex justify-center items-center z-10 ${
                isFocus ? "font-bold text-white" : "opacity-50"
              }`;

              return (
                <li className={contentClassName} key={content}>
                  {content}
                </li>
              );
            })}
          </ul>
          <div className="w-full h-12 rounded-md" />
        </div>
      </div>
      <div className="self-center">
        <button className="btn btn-ghost btn-circle btn-sm" onClick={moveDownOneBlock} type="button">
          <MdArrowDropDown className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
