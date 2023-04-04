import React from "react";

const Modal = (props) => {
    console.log(props.singleData);
    const { image_link, description, integrations, features } = props.singleData;
    // console.log(Object.values(features ||{}));
    console.log(integrations);
  return (
    <div>
      <input type="checkbox" id="my-modal-5" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <div className="card lg:card-side bg-base-100 ">
            
            <div className="card-body">
              <h2 className="card-title">{description?description:"Not FOund"}</h2>

              <div className="flex justify-between text-blue-400">
                 <div>
                   <h1 className="text-xl font-bold">Features:</h1>
                   {
                    Object.values(features ||{}).map((value) => <li>{value.feature_name}</li> )
                   }
                 </div>
                 {/* <div>
                    <h1 className="text-xl font-bold">Integrations:</h1>
                    {
                        integrations.map((int) => (<p>{int? int: "not found"}</p>)
                    )}
                 </div> */}
              </div>
              


             
            </div>
            <figure>
              <img className="w-full h-64" src={image_link ? image_link[0] : null} alt="Album" />
            </figure>
          </div>
          <div className="modal-action">
            <label htmlFor="my-modal-5" className="btn">Close</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
