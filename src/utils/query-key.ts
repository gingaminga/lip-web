export const QUERY_KEY = {
  LIP: {
    DUPLICATE_NICKNAME: (nickname: string) => ["duplicate-nickname", nickname],
    GET_TODOS: (date: string) => ["get-todos", date],
    GET_DETAIL_ROUTINE: (id: number) => ["get-detail-routine", id],
    GET_OAUTH_URL: (type: string) => ["get-oauth-url", type],
    GET_ROUTINES: (limit: number) => ["get-routines", limit],
  },
};
