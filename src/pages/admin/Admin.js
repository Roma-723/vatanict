import React, { useCallback, useEffect, useState } from 'react'
import { Table } from 'antd'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { fetchSubmissions, UnauthorizedError } from '../../utils/submitForm'
import { logout, verifyAuth } from '../../utils/auth'
import './Admin.css'

const ADMIN_SECTIONS = ['all', 'contact', 'order', 'apply']

const SECTION_LABELS = {
  all: 'All requests',
  contact: 'Contact page',
  order: 'Order development',
  apply: 'Job application',
}

const TYPE_LABELS = {
  contact: 'Contact page',
  order: 'Order development',
  apply: 'Job application',
}

function Admin() {
  const { section } = useParams()
  const navigate = useNavigate()
  const location = useLocation()
  const [allSubmissions, setAllSubmissions] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [authChecked, setAuthChecked] = useState(false)

  const activeSection = ADMIN_SECTIONS.includes(section) ? section : 'all'

  useEffect(() => {
    let cancelled = false

    const checkAuth = async () => {
      const isAuthed = await verifyAuth()
      if (cancelled) {
        return
      }

      if (!isAuthed) {
        navigate('/admin/login', { replace: true, state: { from: location.pathname } })
        return
      }

      setAuthChecked(true)
    }

    checkAuth()

    return () => {
      cancelled = true
    }
  }, [navigate, location.pathname])

  useEffect(() => {
    if (!section || !ADMIN_SECTIONS.includes(section)) {
      navigate('/admin/all', { replace: true })
    }
  }, [section, navigate])

  const loadSubmissions = useCallback(async () => {
    setLoading(true)
    setError('')

    try {
      const data = await fetchSubmissions()
      setAllSubmissions(data)
    } catch (err) {
      if (err instanceof UnauthorizedError) {
        navigate('/admin/login', { replace: true, state: { from: location.pathname } })
        return
      }
      setError('Could not load requests. Make sure the API is running (npm start).')
      setAllSubmissions([])
    } finally {
      setLoading(false)
    }
  }, [navigate, location.pathname])

  useEffect(() => {
    if (!authChecked) {
      return undefined
    }

    loadSubmissions()
    const interval = setInterval(loadSubmissions, 10000)
    return () => clearInterval(interval)
  }, [authChecked, loadSubmissions])

  const handleLogout = () => {
    logout()
    navigate('/admin/login', { replace: true })
  }

  const filteredSubmissions =
    activeSection === 'all'
      ? allSubmissions
      : allSubmissions.filter((item) => item.type === activeSection)

  const countFor = (type) =>
    type === 'all'
      ? allSubmissions.length
      : allSubmissions.filter((item) => item.type === type).length

  const columns = [
    {
      title: 'Date',
      dataIndex: 'createdAt',
      key: 'createdAt',
      width: 180,
      render: (value) => new Date(value).toLocaleString(),
    },
    ...(activeSection === 'all'
      ? [
          {
            title: 'Form',
            dataIndex: 'type',
            key: 'type',
            width: 180,
            render: (value) => TYPE_LABELS[value] || value,
          },
        ]
      : []),
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: 160,
    },
    {
      title: 'Phone',
      dataIndex: 'phonenumber',
      key: 'phonenumber',
      width: 140,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      width: 220,
    },
    {
      title: 'Company',
      dataIndex: 'company',
      key: 'company',
      width: 160,
    },
    {
      title: 'Message',
      dataIndex: 'message',
      key: 'message',
    },
  ]

  if (!authChecked) {
    return null
  }

  return (
    <div className='w-full min-h-screen bg-[rgba(242,242,242,1)] pt-[36px] pb-[48px]'>
      <div className='2xl:px-[100px] max-[1370px]:px-[6%] max-[1200px]:px-[4%] max-[1080px]:px-[16px] px-[16px] max-w-[1440px] mx-auto'>
        <div className='flex flex-col mdMUI:flex-row mdMUI:items-center mdMUI:justify-between gap-[16px] mb-[32px]'>
          <h1 className='text-[rgba(73,73,73,1)] mdMUI:text-[40px] text-[28px] font-[600] text-center mdMUI:text-left'>
            Admin — Form requests
          </h1>
          <div className='flex flex-wrap gap-[12px] mx-auto mdMUI:mx-0'>
            <button
              onClick={loadSubmissions}
              className='px-[24px] py-[12px] rounded-[44px] bg-white text-[rgba(73,73,73,1)] border border-[rgba(123,123,123,0.4)] font-[500]'
            >
              Refresh
            </button>
            <button
              onClick={handleLogout}
              className='px-[24px] py-[12px] rounded-[44px] bg-white text-[rgba(73,73,73,1)] border border-[rgba(123,123,123,0.4)] font-[500]'
            >
              Logout
            </button>
          </div>
        </div>

        <div className='flex flex-wrap gap-[12px] mb-[24px]'>
          {ADMIN_SECTIONS.map((key) => (
            <button
              key={key}
              onClick={() => navigate(`/admin/${key}`)}
              style={
                activeSection === key
                  ? { background: 'linear-gradient(137.19deg, #2F9E56 24.05%, #0F682E 107.51%)' }
                  : {}
              }
              className={`px-[24px] py-[12px] rounded-[44px] font-[500] ${
                activeSection === key
                  ? 'text-white'
                  : 'bg-white text-[rgba(73,73,73,1)] border border-[rgba(123,123,123,0.4)]'
              }`}
            >
              {SECTION_LABELS[key]} ({countFor(key)})
            </button>
          ))}
        </div>

        <div className='bg-white rounded-[16px] p-[16px] mdMUI:p-[24px] shadow-sm overflow-x-auto'>
          <h2 className='text-[rgba(73,73,73,1)] text-[20px] font-[600] mb-[16px]'>
            {SECTION_LABELS[activeSection]}
          </h2>

          {error ? <p className='text-red-600 mb-[16px]'>{error}</p> : null}

          <Table
            rowKey='id'
            columns={columns}
            dataSource={filteredSubmissions}
            loading={loading}
            pagination={{ pageSize: 10, showSizeChanger: true }}
            scroll={{ x: 1000 }}
          />
        </div>
      </div>
    </div>
  )
}

export default Admin
