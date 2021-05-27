import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Subscription } from "rxjs";
import { RedactionService } from "src/app/services/redaction.service";

@Component({
  selector: "app-homepage",
  templateUrl: "./homepage.component.html",
  styleUrls: ["./homepage.component.scss"],
})
export class HomepageComponent implements OnInit, OnDestroy {
  documentForm: FormGroup;
  formSubscription: Subscription;

  constructor(private fb: FormBuilder, public service: RedactionService) {}

  ngOnInit() {
    // Initialize form
    this.documentForm = this.fb.group({
      document: "",
    });

    // Set up subscription to redact text whenever the document value changes but only if there are keywords to remove
    this.formSubscription = this.documentForm.valueChanges.subscribe((val) => {
      this.service.documentText = val.document;

      this.service.keyWords.length ? this.service.redactText() : null;
    });
  }

  ngOnDestroy() {
    this.formSubscription.unsubscribe();
  }
}
