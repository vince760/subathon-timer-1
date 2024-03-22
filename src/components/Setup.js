import React from 'react'
import {
  CRow,
  CCol,
  CFormLabel,
  CFormInput,
  CFormSwitch,
  CForm,
  CContainer,
  CButton,
} from '@coreui/react'
import { IMaskMixin } from 'react-imask'
import { InputMask } from '@react-input/mask'

let events = [
  {
    id: 1,
    title: 'Sub Tier 1/Prime',
    time: '00:05:00',
  },
  {
    id: 2,
    title: 'Sub Tier 2/Prime',
    time: '00:10:00',
  },
  {
    id: 3,
    title: 'Sub Tier 3/Prime',
    time: '00:15:00',
  },
  {
    id: 4,
    title: 'Tips (per $1)',
    time: '00:01:00',
  },
]

let commands = [
  {
    id: 1,
    title: 'Pause',
    command: '!timerpause',
  },
  {
    id: 2,
    title: 'Resume',
    command: '!timerresume',
  },
  {
    id: 3,
    title: 'Add Time',
    command: '!timeraddtime',
  },
]

const Setup = () => {
  const [initialTime, setInitialTime] = React.useState('05:00:00')
  const CFormInputWithMask = IMaskMixin(({ inputRef, ...props }) => (
    <CFormInput
      {...props}
      ref={inputRef} // bind internal input
    />
  ))

  function mapCommands(commands) {
    return (
      <CRow key={commands.id} className="justify-content-center">
        <CCol className="pt-1" xs={6} md={4}>
          <p>{commands.title}</p>
        </CCol>
        <CCol md={8}>
          <CForm>
            <CFormInput
              style={{
                textAlign: 'center',
                backgroundColor: '#212631',
                border: '1 px solid white',
                borderRadius: '15px',
              }}
              type="text"
              id="exampleFormControlInput1"
              placeholder={commands.command}
              aria-describedby="exampleFormControlInputHelpInline"
            />
          </CForm>
        </CCol>
      </CRow>
    )
  }

  function mapEventsToTime(events) {
    return (
      <CRow key={events.id}>
        <CCol xs={1}>
          <CFormSwitch id="formSwitchCheckChecked" defaultChecked />
        </CCol>
        <CCol xs={5}>
          <p>{events.title}</p>
        </CCol>
        <CCol xs={3}>
          <InputMask
            placeholder={events.time}
            style={{
              textAlign: 'center',
              backgroundColor: '#212631',
              border: '1 px solid white',
              borderRadius: '15px',
            }}
            mask="__:__:__"
            replacement={{ _: /\d/ }}
          />
        </CCol>
      </CRow>
    )
  }
  return (
    <CContainer md className="pt-4">
      <p>Duration</p>
      <CRow className="mb-3 justify-content-center">
        <CFormLabel htmlFor="staticEmail" className="col-md-4 col-form-label">
          Start Duration
        </CFormLabel>
        <CCol className="pt-2" sm={6}>
          <InputMask
            placeholder="05:00:00"
            style={{ textAlign: 'center', backgroundColor: '#212631', border: 'none' }}
            mask="__:__:__"
            replacement={{ _: /\d/ }}
          />
        </CCol>
      </CRow>
      <hr />
      <p>Trigger Events</p>
      {events.map((event) => mapEventsToTime(event))}
      <div className="pt-3">
        <CButton style={{ width: '80%' }} shape="rounded-pill" color="success" variant="outline">
          Add New Event
        </CButton>
      </div>
      <hr />
      <p>Chat Commands</p>
      {commands.map((command) => mapCommands(command))}
      <div className="pt-3">
        <CButton style={{ width: '80%' }} shape="rounded-pill" color="success" variant="outline">
          Add New Command
        </CButton>
      </div>
    </CContainer>
  )
}

export default Setup
