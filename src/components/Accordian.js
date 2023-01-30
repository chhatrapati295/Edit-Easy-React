import React from 'react'

export default function Accordian(props) {
  return (
    <div>
      <div className=" container my-5 accordion pb-2" id="accordionExample" style={{  borderRadius :'4px'}}>
        <h2 className={`heading my-2 mb-4 text-${props.theme==='dark'?'light':'dark'}`} style={{margin :'auto'}}>About Us</h2>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className={`accordion-button bg-${props.theme==='dark'?'dark':'light'} text-${props.theme==='dark'?'light':'dark'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <strong>Our Services</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className={`accordion-body bg-${props.theme==='dark'?'dark':'light'} text-${props.theme==='dark'?'light':'dark'} `}>
        <p>Combining in-depth scientific knowledge with award-winning copywriting and content production skills, we can help you identify compelling, authentic stories about your ideas and research.</p>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className={`accordion-button collapsed bg-${props.theme==='dark'?'dark':'light'} text-${props.theme==='dark'?'light':'dark'} `} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <strong>Safe to Use</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className={`accordion-body bg-${props.theme==='dark'?'dark':'light'} text-${props.theme==='dark'?'light':'dark'} `}>
        <p>Whether you’re after a one-off project like a white paper, brochure or online feature, or ongoing content such as blogging, newsletters, or in-app user updates and articles we’ll work with you to develop and craft high-quality science-led content for the audiences that matter to you.</p>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className={`accordion-button collapsed bg-${props.theme==='dark'?'dark':'light'} text-${props.theme==='dark'?'light':'dark'} `} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      <strong>Contact Us</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className={`accordion-body bg-${props.theme==='dark'?'dark':'light'} text-${props.theme==='dark'?'light':'dark'} `}>
        <p>We take the protection of your personal data seriously. Read our privacy notice to discover the steps we take to keep it safe and what we use it for.</p>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}
