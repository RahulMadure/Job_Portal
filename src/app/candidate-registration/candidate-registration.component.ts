import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CandidateServiceService } from '../services/candidate-service.service';


@Component({
  selector: 'app-candidate-registration',
  templateUrl: './candidate-registration.component.html',
  styleUrls: ['./candidate-registration.component.css']
})
export class CandidateRegistrationComponent {
  candidateForm!: FormGroup;
  skills: string[] = [];
  errorMessage!: string;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private candidateService: CandidateServiceService
  ) { }

  ngOnInit() {
    this.candidateForm = this.fb.group({
      name: ['', Validators.required],
      role: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      skills: ['']
    });
  }

  addSkill() {
    const control = this.candidateForm.get('skills');
    if (control) {
      const skill = control.value;
      if (skill && this.skills.length < 5) {
        this.skills.push(skill);
        control.setValue('');
      }
    }
  }

  removeSkill(index: number) {
    this.skills.splice(index, 1);
  }

  submitForm() {
      const candidate = this.candidateForm.value;
      candidate.skills = this.skills;
      this.candidateService.registerCandidate(candidate).subscribe({
        next:(res)=>{
          this.candidateForm.reset()
          alert("Candidate Added Successfully");
        },
        error(){
          alert("Error while adding candidate");

        }
      });
    
  }
}
