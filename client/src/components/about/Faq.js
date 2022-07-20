import Footer from "../core/Footer";
import Navbar from "../core/Navbar";
const Faq= () => {
    return (
             <div>
                <Navbar />
        <div className="container header-pad">
                <h1 className="head text-center bg5 mb-5">FAQ</h1>
                <div className="accordion" id="accordionPanelsStayOpenExample">
                <div className="accordion-item mb-4">
                 <h2 className="accordion-header " id="panelsStayOpen-headingOne">
                  <button className="accordion-button collapsed bg3 "type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="false" aria-controls="panelsStayOpen-collapseOne">
                  Is your facility 100% nut free?
                  </button>
                 </h2>
                <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse " aria-labelledby="panelsStayOpen-headingOne">
                <div className="accordion-body bg4">
               <strong>Yes, our bakery is 100% free from Peanut and Tree – Nuts.</strong> 
                </div>
                </div>
                </div>
                <div className="accordion-item mb-4">
                <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                  <button className="accordion-button collapsed bg3 " type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                  Does your bakery process any products with coconuts?
                  </button>
                </h2>
               <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
               <div className="accordion-body bg4">
               <strong>No, we do not process any coconut products. The FDA recently made changes that now classNameify coconut as a tree-nut. We are 100% coconut-free.</strong> 
               </div>
               </div>
               </div>
               <div className="accordion-item mb-4">
               <h2 className="accordion-header" id="panelsStayOpen-headingThree">
               <button className="accordion-button collapsed bg3 " type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
               Why do you label for 100% dairy free but use eggs?
               </button>
              </h2>
               <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse " aria-labelledby="panelsStayOpen-headingThree">
               <div className="accordion-body bg4">
               <strong>Please know that the FDA does not classNameify eggs as a product from a diary producing mammal. Eggs are considered a separate allergen by the FDA and are required to be labeled separately. We are, in fact, 100% dairy-free, but we are not egg-free.</strong> 
               </div>
               </div>
               </div>
                <div className="accordion-item mb-4">
                 <h2 className="accordion-header " id="panelsStayOpen-headingFour">
                  <button className="accordion-button collapsed bg3 "type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
                  Are your products non-gmo?
                  </button>
                 </h2>
                <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse " aria-labelledby="panelsStayOpen-headingFour">
                <div className="accordion-body bg4">
               <strong>99% of ingredients are non-gmo.  </strong> 
                </div>
                </div>
                </div>
                <div className="accordion-item mb-4">
                 <h2 className="accordion-header " id="panelsStayOpen-headingFive">
                  <button className="accordion-button collapsed bg3 "type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="false" aria-controls="panelsStayOpen-collapseFive">
                  Many celiac also do not tolerate soy. Why do you use soy in your products? 
                  </button>
                 </h2>
                <div id="panelsStayOpen-collapseFive" className="accordion-collapse collapse " aria-labelledby="panelsStayOpen-headingFive">
                <div className="accordion-body bg4">
               <strong>We understand our customers concerns regarding soy and are actively working to remove soy from our product line.</strong> 
               </div>
             </div>
          </div><div className="accordion-item mb-4">
                 <h2 className="accordion-header " id="panelsStayOpen-headingSix">
                  <button className="accordion-button collapsed bg3 "type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSix" aria-expanded="false" aria-controls="panelsStayOpen-collapseSix">
                  Do you use Purity Protocol Oats?
                  </button>
                 </h2>
                <div id="panelsStayOpen-collapseSix" className="accordion-collapse collapse " aria-labelledby="panelsStayOpen-headingSix">
                <div className="accordion-body bg4">
               <strong>Yes, we use Purity Protocol Oats in our products.</strong> 
               </div>
             </div>
          </div><div className="accordion-item mb-4">
                 <h2 className="accordion-header " id="panelsStayOpen-headingSeven">
                  <button className="accordion-button collapsed bg3 "type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSeven" aria-expanded="false" aria-controls="panelsStayOpen-collapseSeven">
                  I entered my wrong shipping address. Help! How do I update my address?
                  </button>
                 </h2>
                <div id="panelsStayOpen-collapseSeven" className="accordion-collapse collapse " aria-labelledby="panelsStayOpen-headingSeven">
                <div className="accordion-body bg4">
               <strong>We have added a great new feature to our website. This allows the customer to edit your order within 2 hours of creating. Simply click on View Order in your order confirmation email. This will open a window which will have 3 options for you. Reorder, Edit Order, Cancel Order. Simply click on Edit Order and proceed with entering the correct address at checkout. </strong> 
               </div>
             </div>
          </div><div className="accordion-item mb-4">
                 <h2 className="accordion-header " id="panelsStayOpen-headingEight">
                  <button className="accordion-button collapsed bg3 "type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseEight" aria-expanded="false" aria-controls="panelsStayOpen-collapseEight">
                  I didn't meet the free shipping of threshold. I would like to add some extra product to qualify for free shipping. 
                  </button>
                 </h2>
                <div id="panelsStayOpen-collapseEight" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingEight">
                <div className="accordion-body bg4">
               <strong>We have added a great new feature to our website. This allows the customer to edit your order within 2 hours of creating. This feature is available immediately after check out on the confirmation screen. Simply click on Edit Order and proceed with adding additional products to mean the $49.00 minimum requirement and checkout as normal. If you have clicked out of the screen, you can return by click on View Order in your order confirmation email. This will open a window which will have 3 options for you. Reorder, Edit Order, Cancel Order.  Simple click Edit Order and proceed as above. </strong> 
               </div>
                </div>
                </div>
                </div>
                </div>
        
        <Footer />
       </div> 
    

    
        
    );
}

export default Faq;