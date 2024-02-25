import React from 'react'

const UpdateData = () => {
  return (
    <>
    <div class="background">
  <div class="container">
    <div class="screen">
      <div class="screen-header">
        <div class="screen-header-left">
          <div class="screen-header-button close"></div>
          <div class="screen-header-button maximize"></div>
          <div class="screen-header-button minimize"></div>
        </div>
        <div class="screen-header-right">
          <div class="screen-header-ellipsis"></div>
          <div class="screen-header-ellipsis"></div>
          <div class="screen-header-ellipsis"></div>
        </div>
      </div>
      <div class="screen-body">
        <div class="screen-body-item left">
          <div class="app-title">
            <span>Employee</span>
            <span>Data</span>
          </div>
          <div class="app-contact">Update Id : 9122cv5541</div>
        </div>
        <div class="screen-body-item">
          <div class="app-form">
            <div class="app-form-group">
              <input class="app-form-control" placeholder="Id"/>
            </div>
            <div class="app-form-group">
              <input class="app-form-control" placeholder="Name"/>
            </div>
            <div class="app-form-group">
              <input class="app-form-control" placeholder="userName"/>
            </div>
            <div class="app-form-group message">
              <input class="app-form-control" placeholder="Mail"/>
            </div>
            <div class="app-form-group message">
              <input class="app-form-control" placeholder="Phone"/>
            </div>
            <div class="app-form-group buttons">
              <button class="app-form-button">Update</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</div>

    </>
  )
}

export default UpdateData