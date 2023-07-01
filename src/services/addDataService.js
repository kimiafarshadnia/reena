import http from "./httpService";

export function addData(data) {
    return http.post("/api/v1/send_message", data);
}
