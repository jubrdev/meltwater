import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class RedactionService {
  keyWords: string[] = [];
  documentText: string = "";
  redactedText: string = "";

  constructor() {}

  redactText() {
    const regularExpression = new RegExp(this.keyWords.join("|"), "gi");

    this.redactedText = this.documentText.replace(
      regularExpression,
      (matched) => {
        return "x".repeat(matched.length);
      }
    );
  }
}
