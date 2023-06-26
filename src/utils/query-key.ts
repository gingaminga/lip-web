export const QUERY_KEY = {
  LIP: {
    GET_DETAIL_ROUTINE: (id: number) => ["get-detail-routine", id],
    GET_OAUTH_URL: (type: string) => ["get-oauth-url", type],
    GET_ROUTINES: (limit: number) => ["get-routines", limit],
  },
};
