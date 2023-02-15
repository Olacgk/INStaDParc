import React from 'react'
import './styles.scss'
import Dashboard from '../../components/Dashboard'
import WidgetSm from '../../components/widgetSm/widgetSm'
import WidgetLg from '../../components/widgetLg/widgetLg'

export default function Home() {
  return (
    
    <Dashboard>
        <div className="widgets">
            <WidgetSm />
            <WidgetLg />
          </div>
    </Dashboard>
  )
}
