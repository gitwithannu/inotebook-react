import React from 'react'

function PersonalizedNotebooks() {
     return (
       <>
          <div className='centered'>PersonalizedNotebooks</div>
               <div className="container">
               <div className="row">
                    <div className="col">
                    <img alt="make_it_yoursels" src={`../theme images/images/dsmake_it_yourself.webp`}></img>
                    </div>
                    <div className="col">
                              <h4 color="#313033" className="typography__St1-sc-vnbw9n-6 gtkKKd content text-left">
                                   Hold on to all your picture-perfect moments with our customized notebooks in just 4 simple steps.
                              </h4>
                              <div className="list-of-spec my-4">
                                   <div className="d-flex list-item">
                                        <p color="#605D62" className="typography__St1-sc-vnbw9n-6 jIhDJQ number-text">1</p>
                                        <p className="typography__St1-sc-vnbw9n-6 knLvAU alpha-text">Select notebook specs</p>
                                   </div>
                                   <div className="d-flex list-item">
                                        <p color="#605D62" className="typography__St1-sc-vnbw9n-6 jIhDJQ number-text">2</p>
                                        <p className="typography__St1-sc-vnbw9n-6 knLvAU alpha-text">Upload the images for notebook covers</p>
                                   </div>
                                   <div className="d-flex list-item">
                                        <p color="#605D62" className="typography__St1-sc-vnbw9n-6 jIhDJQ number-text">3</p>
                                        <p className="typography__St1-sc-vnbw9n-6 knLvAU alpha-text">You can add a video to your notebook if you wish to</p>
                                   </div>
                                   <div className="d-flex list-item">
                                        <p color="#605D62" className="typography__St1-sc-vnbw9n-6 jIhDJQ number-text">4</p>
                                        <p className="typography__St1-sc-vnbw9n-6 knLvAU alpha-text"> Pay for your order and upload the video from your profile section</p>
                                   </div>
                              </div><div className="px-4">
                                   <button className="ripple ripple-surface btn btn-#FFFFFF contained-buttonstyled__ContainedButtonStyle-sc-1icgz34-0 hYTFfI d-flex justify-content-center align-items-center undefined" bg_color="#001E6C" radious="100px" padding="16px" width="187px" fontSize="16px" lineheight="22px" border_color="#001E6C" role="button">Design Now</button>
                              </div>
                    </div>
               </div>
          </div>          
       </>
  )
}

export default PersonalizedNotebooks