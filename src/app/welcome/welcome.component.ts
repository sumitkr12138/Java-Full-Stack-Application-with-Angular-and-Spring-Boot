import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent implements OnInit {


  message ='Some Welcome Messages'
  welcomeMessageFromService: string = ' '
  name=''

  constructor(private route: ActivatedRoute,
    
    private service: WelcomeDataService
  ) { }

  ngOnInit(): void {

    //console.log(this.message)
    // console.log(this.route.snapshot.params['name'])
    this.name = this.route.snapshot.params['name']
      
  }

  getWelcomeMessage() {
    //console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
      
    

    //console.log('last line of getWelcomeMessage')
    }
    handleSuccessfulResponse(response: any){
      this.welcomeMessageFromService = response.message
      // console.log(response.message);
      // console.log(response);
    }

    handleErrorResponse(error : any){
      this.welcomeMessageFromService = error.error.message


    }
}
