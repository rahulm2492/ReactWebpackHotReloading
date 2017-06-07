import React ,{Component} from 'react';

class TimeLine extends Component {

  componentDidMount(){
  	var items = document.querySelectorAll(".timeline li");
  // check if an element is in viewport
  // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
      if (isElementInViewport(items[i])) {
        items[i].classList.add("in-view");
      }
    }
  }

  // listen for events
  window.addEventListener("load", callbackFunc);
  window.addEventListener("resize", callbackFunc);
  window.addEventListener("scroll", callbackFunc);


  }

  sendData(){
  	fetch('http://localhost:3000/set', {
	  method: 'post',
	  headers: {
	    'Accept': 'application/json, text/plain, */*',
	    'Content-Type': 'application/json'
	  },
  body: JSON.stringify({a: 7, str: 'Some string: &=&'})
}).then(res=>res.json())
  .then(res => console.log(res));
};
  
render() {
	return (
<div className="timeline">
  <ul>
    <li>
      <div onClick = {this.sendData.bind(this)}>
        <time>August 2016 - Till Now</time>
         Joined Sapient Global Markets, Gurgaon Under Sapient Consulting as Associate Interactive Developer.
         Under Sapient , joined RBS(Royal Bank Of ScotLand) as Consultant.
      </div>
    </li>
    <li>
      <div>
        <time>Oct 2015 - Aug 2016</time>
        Joined Qburst Technologies, Chennai as Software Engineer. Under Qburst worked for Fast Retailing
        Group , Japan in their innovation Team to develop Ecommerce WebApps and Native Apps
      </div>
    </li>
    <li>
      <div>
        <time>May 2014 - Oct 2015</time>
         Joined Cognizant Technology , Chennai as Programmar Analyst.Under Cognizant Got Extensive Training in
         UI Development Languages and Tools.
      </div>
    </li>
    <li>
      <div>
        <time>May 2013 - May 2014</time>
         Joined MRM Procom Pvt Limited, Faridabad  as R&D Engineer.Under MRM Procom Worked on Latest Tools and Languages 
         Used for Develop Firmware Softwares.
      </div>
    </li>
  </ul>
</div>
)
}
};

export default TimeLine;