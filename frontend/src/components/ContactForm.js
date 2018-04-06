import React from 'react';

const ContactForm = () => {
  return (
    <div className="container">
      <form>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">First Name</label>
          <div className="col-sm-10">
            <input type="text" name="firstname" className="form-control" placeholder="First Name" />
          </div>
        </div>

        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Last Name</label>
          <div className="col-sm-10">
            <input type="text" name="lastname" className="form-control" placeholder="Last Name" />
          </div>
        </div>

        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Phone</label>
          <div className="col-sm-10">
            <input type="tel" name="phone" className="form-control" placeholder="Phone" />
          </div>
        </div>

        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Email</label>
          <div className="col-sm-10">
            <input type="email" name="email" className="form-control" placeholder="Email" />
          </div>
        </div>

        <div className="form-group row">
          <div className="col-sm-2"></div>
          <div className="col-sm-10">
            <button type="submit" className="btn btn-primary mr-2">Save</button>
            <button className="btn btn-secondary">Cancel</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default ContactForm;