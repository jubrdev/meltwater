import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { RedactionService } from "src/app/services/redaction.service";

@Component({
  selector: "app-keyword-chips",
  templateUrl: "./keyword-chips.component.html",
  styleUrls: ["./keyword-chips.component.scss"],
})
export class KeywordChipsComponent implements OnInit {
  keywordForm: FormGroup;

  constructor(private fb: FormBuilder, public service: RedactionService) {}

  ngOnInit() {
    // Initialize form
    this.keywordForm = this.fb.group({
      chipsInput: "",
    });
  }

  removeKeyword(i) {
    // Remove specific keyword at its index
    this.service.keyWords.splice(i, 1);

    this.service.redactText();

    // If all keywords are cleared then reset redacted text
    if (this.service.keyWords.length === 0) {
      this.service.redactedText = "";
    }
  }

  submitForm() {
    // Clean up input and ensure all values split at a comma or a space
    // Ignore splitting at double and single quotes
    // Remove all quotes
    const sanitizedKeywords = this.keywordForm.value.chipsInput
      .split(/[ ,]+(?=(?:(?:[^'"]*(?:'|")){2})*[^'"]*$)/)
      .map((word) => word.replace(/['"]+/g, ""));

    // Store each word in array in service
    sanitizedKeywords.map((word) => this.service.keyWords.push(word));

    // Clear input field
    this.keywordForm.reset();

    // Redact text if there are new key words and document has text
    this.service.documentText.length ? this.service.redactText() : null;
  }
}
