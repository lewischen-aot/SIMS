import * as dayjs from "dayjs";
import { StringBuilder } from "../../utilities/string-builder";
import {
  DATE_FORMAT,
  SPACE_FILLER,
  NUMBER_FILLER,
  TransactionCodes,
} from "../cra-integration.models";
import { CRARequestFileLine } from "./cra-file";

/**
 * Header of a CRA request/response file.
 */
export class CRAFileHeader implements CRARequestFileLine {
  transactionCode: TransactionCodes;
  processDate: Date;
  programAreaCode: string;
  environmentCode: string;
  sequence: number;

  public getFixedFormat(): string {
    const header = new StringBuilder();
    header.append(this.transactionCode);
    header.repeatAppend(SPACE_FILLER, 24);
    header.appendDate(this.processDate, DATE_FORMAT);
    header.append(SPACE_FILLER);
    header.append(this.programAreaCode);
    header.append(this.environmentCode);
    header.appendWithStartFiller(this.sequence.toString(), 5, NUMBER_FILLER);
    header.repeatAppend(SPACE_FILLER, 99);
    header.append("0");
    return header.toString();
  }

  public static CreateFromLine(line: string): CRAFileHeader {
    const header = new CRAFileHeader();
    header.transactionCode = line.substr(0, 4) as TransactionCodes;
    header.processDate = dayjs(line.substr(28, 8), DATE_FORMAT).toDate();
    header.programAreaCode = line.substr(37, 4);
    header.environmentCode = line.substr(41, 1);
    header.sequence = parseInt(line.substr(42, 5));
    return header;
  }
}
