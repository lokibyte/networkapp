import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of,throwError } from 'rxjs';
import { Http, HttpResponse } from '@capacitor-community/http';

@Injectable({
  providedIn: 'root'
})
export class NetworkService {

  constructor(private http: HttpClient) { }

  post() {
	const url = "http://localhost:3001/test";
	// const url = "http://k8s-developm-ingressa-1c98111f81-862727769.ap-south-1.elb.amazonaws.com/jobseeker/otp";
    const reqObj = {
		"loginType": "MOBILE",
		"username": "+919876543210"
	};
    const options = {
      url: url,
      data: reqObj,
      headers: { 'Content-Type': 'application/json' }
    };
    Http.request({ ...options, method: 'POST' })
      .then(async response => {
		console.info("response",response);
      })
      .catch(e => {
        console.info("error",e);
        
      })
  }

  httpPost(_url:any,reqObj:any):Observable<any> {
		const _httpOptions = {
			"Content-Type":"Application/json",
			"Accept": "application/json"
		  };
	
		// //fake post url
		// const url = "https://reqres.in/api/users";
		// reqObj = {
	  //       name: "paul rudd",
	  //       movies: ["", "Role Models"]
	  //   };

		
		const url = "http://localhost:3001/test";
		// const url = "http://10.0.2.2:3001/test"; //emulator
		// const url = "http://192.168.1.34:3001/test"; //device with same network
		// const url = "http://k8s-developm-ingressa-1c98111f81-862727769.ap-south-1.elb.amazonaws.com/jobseeker/otp";
		reqObj = {
	        "loginType": "MOBILE",
	        "username": "+919876543210"
	    };
		
		const headers = new HttpHeaders({
			// "Content-Type":"Application/json",
			// "Content-Type":"application/x-www-form-urlencoded",
			// "Content-Type":"text/plain",
			
			// "Accept": "application/json"
		  });
		  const options = { headers: headers };
		console.info("before api call",url,reqObj);
		return this.http.post(url,reqObj, options);
	}
}
