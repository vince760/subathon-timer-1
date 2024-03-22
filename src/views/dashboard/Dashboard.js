import React, { useEffect } from 'react'
import classNames from 'classnames'
import Controls from '../../components/Controls'
import Setup from '../../components/Setup'
import {
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CContainer,
  CNav,
  CNavItem,
  CNavLink,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CForm,
  CFormSelect,
  CBadge,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cibGoogle,
  cibFacebook,
  cibLinkedin,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cibTwitter,
  cilCloudDownload,
  cilPeople,
  cilUser,
  cilUserFemale,
  cilGift,
} from '@coreui/icons'

import avatar1 from 'src/assets/images/avatars/1.jpg'
import avatar2 from 'src/assets/images/avatars/2.jpg'
import avatar3 from 'src/assets/images/avatars/3.jpg'
import avatar4 from 'src/assets/images/avatars/4.jpg'
import avatar5 from 'src/assets/images/avatars/5.jpg'
import avatar6 from 'src/assets/images/avatars/6.jpg'

import WidgetsBrand from '../widgets/WidgetsBrand'
import WidgetsDropdown from '../widgets/WidgetsDropdown'
import MainChart from './MainChart'
import Countdown from 'react-countdown'

import WebFont from 'webfontloader'

import './dashboard.css'
let liveEvents = [
  {
    id: 1,
    title: 'Nubs99 gifted 5 subs',
    minutes: 25,
    type: 'gift',
  },
  {
    id: 2,
    title: 'New T1 from SkiddyMold',
    minutes: 5,
    type: 'new',
  },
  {
    id: 3,
    title: 'Vinny_35 renewed T1',
    minutes: 5,
    type: 'renew',
  },
]
const Dashboard = () => {
  const [seconds, setSeconds] = React.useState('00')
  const [minutes, setMinutes] = React.useState('00')
  const [hours, setHours] = React.useState(1)

  const [activeTab, setTab] = React.useState('setup')
  const [fontColor, setFontColor] = React.useState('#563d7c')
  const [fontSize, setFontSize] = React.useState(40)
  const [fontFamily, setFontFamily] = React.useState('Droid Sans')
  const [isActive, setIsActive] = React.useState(false)
  const [totalSeconds, setTotalSeconds] = React.useState(hours * 3600 + minutes * 60 + seconds)

  useEffect(() => {
    let interval
    WebFont.load({
      google: {
        families: [
          'Droid Sans',
          'Chilanka',
          'Truculenta',
          'Madimi One',
          'Londrina Shadow',
          'Bungee Spice',
          'Aref Ruqaa Ink',
        ],
      },
    })
    if (isActive && totalSeconds > 0) {
      interval = setInterval(() => {
        setTotalSeconds((prevTotalSeconds) => {
          const newTotalSeconds = prevTotalSeconds - 1
          const newHours = Math.floor(newTotalSeconds / 360000)
          const newMinutes = Math.floor((newTotalSeconds % 3600) / 60)
          const newSeconds = newTotalSeconds % 60
          setHours(newHours)
          setMinutes(newMinutes)
          setSeconds(newSeconds)
          return newTotalSeconds
        })
      }, 1000)
    } else if (totalSeconds === 0) {
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [isActive, totalSeconds])

  function toggleTabs(target) {
    setTab(target)
  }

  function stopCountdown(interval) {
    clearInterval(interval)
    console.log('Countdown stopped!')
  }

  function startCountdown(hours, minutes, seconds) {
    var totalSeconds = hours * 3600 + minutes * 60 + seconds
    var remainingSeconds = totalSeconds
    var interval

    function updateDisplay() {
      var hrs = Math.floor(remainingSeconds / 3600)
      var mins = Math.floor((remainingSeconds % 3600) / 60)
      var secs = remainingSeconds % 60
      console.log(hrs + 'h ' + mins + 'm ' + secs + 's')
    }

    interval = setInterval(function () {
      if (remainingSeconds <= 0) {
        clearInterval(interval)
        console.log('Countdown complete!')
      } else {
        remainingSeconds--
        updateDisplay()
      }
    }, 1000)

    return interval
  }

  function start() {
    setIsActive(true)
  }

  function pause() {
    setIsActive(false)
  }

  function addMinute(min) {
    const totalMinutes = hours * 60 + minutes + min
    console.log(totalMinutes, hours, minutes, min)
    const newHours = Math.floor(totalMinutes / 600000)
    const newMinutes = totalMinutes % 60
    console.log('newMinutes', newMinutes)
    setHours(newHours)
    setMinutes(newMinutes)
  }

  function mapLiveEvents(events) {
    console.log(events)
    return (
      <CRow key={events.id} className="pt-4">
        <CCol>
          <CButton disabled color="primary p-2" className="position-relative">
            {events.title}
            <CBadge
              className="border border-light p-2"
              color="danger"
              position="top-end"
              shape="rounded-circle"
            >
              <span className="visually-hidden">New alerts</span>
              <CIcon icon={cilGift} />
            </CBadge>
          </CButton>
        </CCol>
        <CCol>
          <p className="pt-2">{`+${events.minutes} min`}</p>
        </CCol>
      </CRow>
    )
  }

  return (
    <>
      <div className="px-2">
        <CRow className="justify-content-center">
          <CCol xs={3} className="text-center ">
            <CCard style={{ minHeight: '80vh' }}>
              <CCardHeader>Controls</CCardHeader>
              <CCardBody>
                <CNav variant="tabs">
                  <CNavItem>
                    <CNavLink
                      id="control"
                      style={{ cursor: 'pointer' }}
                      onClick={(e) => {
                        toggleTabs(e.target.id)
                      }}
                      active={activeTab === 'control'}
                    >
                      Control
                    </CNavLink>
                  </CNavItem>
                  <CNavItem>
                    <CNavLink
                      id="setup"
                      style={{ cursor: 'pointer' }}
                      onClick={(e) => {
                        toggleTabs(e.target.id)
                      }}
                      active={activeTab === 'setup'}
                    >
                      Setup
                    </CNavLink>
                  </CNavItem>
                </CNav>
                {activeTab === 'control' ? (
                  <Controls
                    pauseCountdown={pause}
                    isTimerActive={isActive}
                    startCountdown={start}
                    time={{ hours, minutes, seconds }}
                    addMinute={(e) => {
                      addMinute(e)
                    }}
                  />
                ) : (
                  <Setup />
                )}
              </CCardBody>
            </CCard>
          </CCol>
          <CCol>
            <CCard
              className="checkered justify-content-center align-items-center"
              style={{ minHeight: '80vh' }}
            >
              <p style={{ color: fontColor, fontSize: `${fontSize}px`, fontFamily: fontFamily }}>
                {`${hours}:${minutes}:${seconds}`}
              </p>
            </CCard>
          </CCol>
          <CCol xs={3} className="text-center">
            <CCard style={{ minHeight: '80vh' }}>
              <CCard style={{ minHeight: '80vh' }}>
                <CCardHeader>Timer Options</CCardHeader>
                <CCardBody>
                  <CForm className="row g-2">
                    <CInputGroup className="mb-3">
                      <CInputGroupText id="inputGroup-sizing-default">Font Color</CInputGroupText>

                      <CFormInput
                        type="color"
                        id="exampleColorInput"
                        defaultValue="#563d7c"
                        title="Choose your color"
                        onChange={(e) => {
                          setFontColor(e.target.value)
                        }}
                      />
                    </CInputGroup>
                  </CForm>
                  <CForm className="row g-2">
                    <CInputGroup className="mb-3">
                      <CInputGroupText id="inputGroup-sizing-default">Font Size</CInputGroupText>

                      <CFormInput
                        type="number"
                        placeholder="16"
                        aria-label="default input example"
                        onChange={(e) => {
                          setFontSize(e.target.value)
                          console.log(fontSize)
                        }}
                      />
                    </CInputGroup>
                  </CForm>
                  <CForm className="row g-2">
                    <CInputGroup className="mb-3">
                      <CInputGroupText id="inputGroup-sizing-default">Font Family</CInputGroupText>

                      <CFormSelect
                        aria-label="Default select example"
                        onChange={(e) => {
                          console.log(e.target.value)
                          setFontFamily(e.target.value)
                        }}
                        options={[
                          { label: 'Droid Sans', value: 'Droid Sans' },
                          { label: 'Chilanka', value: 'Chilanka' },
                          { label: 'Truculenta', value: 'Truculenta' },
                          { label: 'Madimi One', value: 'Madimi One' },
                          { label: 'Londrina Shadow', value: 'Londrina Shadow' },
                          { label: 'Bungee Spice', value: 'Bungee Spice' },
                          { label: 'Aref Ruqaa Ink', value: 'Aref Ruqaa Ink' },
                        ]}
                      />
                    </CInputGroup>
                  </CForm>
                  <hr />
                  <CCardHeader>Live Events</CCardHeader>

                  {liveEvents.map((events) => {
                   return mapLiveEvents(events)
                  })}
                </CCardBody>
              </CCard>
            </CCard>
          </CCol>
        </CRow>
      </div>
    </>
  )
}

export default Dashboard
