/* eslint-disable no-console */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable import/named */
/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
/* eslint-disable max-len */
/* eslint-disable no-trailing-spaces */
import React, { useEffect, useState } from 'react';
import { Button, Rating } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { addBuketToS3, creatPlace, updatePlace } from '../../functions/serverFunctions';
import './form.scss';
import InputSelect from '../InputSelect/inputSelect';
import { CONTINETS } from '../../constants/constants';

const CreateCardForm = () => {
  const location = useLocation()
  const [formData, setFormData] = useState({})
  const [fileName, setFileName] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    console.log(location)
    setFormData(location?.state?.card)
  }, [])

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  // eslint-disable-next-line no-unused-vars
  const uploadToStorage = (file) => {
    addBuketToS3(file, setFormData)
  }

  const handleSelectContinent = (value) => {
    setFormData((prev) => ({ ...prev, continent: value }))
  }

  const handleUpload = (e) => {
    const file = e.target.files[0]
    setFileName(file.name)
    uploadToStorage(file)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // if (location?.pathname?.includes('?id=')) {
    //   updatePlace(formData, navigate);
    // } else {
    creatPlace(formData, navigate)
    // }
  }

  return (
    <div style={{ paddingBottom: 50 }}>
      <div className="form-container">
        <div className="contents">
          <div className="text">
            <div className="title">Add visited place</div>
            <div className="description">
              Discover the world through the eyes of fellow travelers! We want to
              hear about your most unforgettable journeys and the hidden gems
              you&apos;ve stumbled upon. Share your best travel experiences
              with us and inspire others to embark on their own unforgettable
              adventures.
            </div>
          </div>
          <form onSubmit={handleSubmit} className="form">
            <div className="formText">
              <span className="required">Required *</span>
            </div>
            <div className="formFields">
              <div className="inputRow">
                <input className="input" type="text" placeholder="Place name"
                  name="placeName" maxLength={100} minLength={5}
                  required onChange={handleChange} value={formData?.placeName || ''}
                />
                <input className="input1" type="text" placeholder="Place address"
                  name="placeAddress" maxLength={100} minLength={10}
                  required onChange={handleChange} value={formData?.placeAddress || ''}
                />

              </div>
              <div className="inputRow">
                <div className="input1 uploadFile">
                  {!fileName ? 'Upload file:' : <span>{fileName}</span>}
                  <input id="upload-file" type="file" placeholder="place address"
                    maxLength={100} minLength={10} required
                    onChange={handleUpload}
                  />
                  <label style={{ zIndex: 3 }} className="label-btn"
                    htmlFor="upload-file"
                  >
                    <Button htmlFor="upload-file" className="button"
                      variant="text" color="primary"
                    >Add Image
                    </Button>
                  </label>

                </div>
                <div className="input1" style={{ border: 'none' }}>
                  <label style={{
                    height: 40, fontSize: 23, fontWeight: 700,
                    display: 'flex', alignItems: 'center',
                  }}
                  >
                    <span>Rating:</span>
                    &nbsp;&nbsp;
                    <Rating name="Palce rating" precision={0.1} value={formData?.rating || 0}
                      onChange={(event, newValue) => setFormData(
                        (prev) => ({ ...prev, rating: newValue }),
                      )}
                    />
                  </label>
                </div>

              </div>
              <div style={{ height: 'unset', width: '100%' }}>
                <InputSelect label="Continent" multiple={false}
                  value={formData?.continent || "Africa"}
                  handleSelect={handleSelectContinent}
                  list={CONTINETS} fullWidth={true}
                />
              </div>
              <textarea
                className="input2" placeholder="Comments or questions" required
                rows={10} name="comments" onChange={handleChange}
                value={formData?.comments || ''}
              />
              <button type="submit" className="formSubmitButton">
                <div className="submit">Submit</div>
              </button>
              {/* <SelectAddressComponent /> */}
            </div>
          </form>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default CreateCardForm
