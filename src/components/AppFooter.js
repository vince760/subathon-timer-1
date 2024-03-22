import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter className="px-4">
      <div>
        <a href="https://vincent-vitale.netlify.app/" target="_blank" rel="noopener noreferrer">
          Subathon-Timer
        </a>
        <span className="ms-1">&copy; 2024 vinny_labs.</span>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
