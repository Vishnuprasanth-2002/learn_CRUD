function Form(){
    return (
        <>
         <div className="container">
        <div className="wrapper">
          <div className="title"><span>Add Tweet</span></div>
          <form action="">
            <div className="row">
              <input type="text" placeholder="Enter the tweet here" required />
            </div>
            <div className="form-add">
              <button className="submit-btn">Add</button>
            </div>
          </form>
        </div>
        <div >
          <button className="back">
            <a href="index.html" className="back-btn">back</a>
          </button>
        </div>
      </div>
        </>
    )
}

export default Form;