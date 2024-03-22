import React from 'react'
import { CButton, CRow, CCol } from '@coreui/react'

const Controls = (props) => {
 

  return (
    <div className="pt-4">
      <h3>{`${props.time.hours}:${props.time.minutes}:${props.time.seconds}`}</h3>
      <CButton
        onClick={!props.isTimerActive ? props.startCountdown : props.pauseCountdown}
        color="primary"
        style={{ width: '80%' }}
        shape="rounded-pill"
      >
        {!props.isTimerActive ? 'Start' : 'Pause'}
      </CButton>
      <hr />
      <p className="pt-3">Change Duration</p>
      <div className="p-3">
        <CRow className="d-flex">
          <CCol>
            <CButton
              style={{ width: '100%' }}
              shape="rounded-pill"
              color="success"
              variant="outline"
              onClick={(e) => {
                props.addMinute(1)
              }}
            >
              +1 min
            </CButton>
          </CCol>
          <CCol sm={5}>
            <CButton
              style={{ width: '100%' }}
              shape="rounded-pill"
              color="success"
              variant="outline"
              onClick={(e) => {
                props.addMinute(10)
              }}
            >
              +10 min
            </CButton>
          </CCol>
          <CCol>
            <CButton
              style={{ width: '100%' }}
              shape="rounded-pill"
              color="success"
              variant="outline"
            >
              +1 hr
            </CButton>
          </CCol>
        </CRow>
      </div>
      <div className="p-3">
        <CRow className="d-flex">
          <CCol>
            <CButton
              style={{ width: '100%' }}
              shape="rounded-pill"
              color="success"
              variant="outline"
            >
              -1 min
            </CButton>
          </CCol>
          <CCol sm={5}>
            <CButton
              style={{ width: '100%' }}
              shape="rounded-pill"
              color="success"
              variant="outline"
            >
              -10 min
            </CButton>
          </CCol>
          <CCol>
            <CButton
              style={{ width: '100%' }}
              shape="rounded-pill"
              color="success"
              variant="outline"
            >
              -1 hr
            </CButton>
          </CCol>
        </CRow>
      </div>
      <hr />
      <div>
        <p>Reset</p>
        <CButton style={{ width: '80%' }} shape="rounded-pill" color="danger" variant="outline">
          Reset Timer
        </CButton>
      </div>
    </div>
  )
}

export default Controls
