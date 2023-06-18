import util from "util";
import conn from "./DBConnect.js";
export const query = util.promisify(conn.query).bind(conn);