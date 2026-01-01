import { ReactNode, FormEvent, ChangeEvent } from 'react'
import { NextRouter } from 'next/router'
import { CalendarEvent } from '../types'

// Base component props
export interface ComponentProps {
  className?: string
  children?: ReactNode
}

// Button component props
export interface ButtonProps {
  title: string
  link: string
}

// Calendar event data structure
export interface CalendarEventData {
  id: string
  title: string
  date: string
  time: string
  image?: string
  hosted?: boolean
  blurb?: string
  website?: string
  soundcloud?: string
  allDay?: boolean
}

// Calendar event component props
export interface CalendarEventProps {
  isFirstEvent: boolean
  date: string
  time: string
  image?: string
  title: string
  hosted: boolean
  blurb?: string | undefined
  website?: string | undefined
  soundcloud?: string | undefined
  id: string
  allDay?: string | undefined
}

// Calendar frame props
export interface CalendarFrameProps {
  events: CalendarEvent[]
  data: {
    allFile: {
      nodes: string[]
    }
  }
  firstEvents: string[]
}

// Form state interfaces
export interface BookingFormState {
  name: string
  actName: string
  email: string
  numberOfBandMembers: string
  website1: string
  website2: string
  website3: string
  message: string
  isDisabled: boolean
}

export interface GeneralFormState {
  name: string
  email: string
  message: string
  isDisabled: boolean
}

export interface EventBookingFormState {
  name: string
  email: string
  eventTitle: string
  eventDate: string
  eventTime: string
  eventDescription: string
  numberOfGuests: string
  budget: string
  message: string
  isDisabled: boolean
}

export interface PhotoshootFormState {
  name: string
  email: string
  phone: string
  eventType: string
  eventDate: string
  eventTime: string
  duration: string
  numberOfPeople: string
  budget: string
  message: string
  isDisabled: boolean
}

export interface PrivatePartyFormState {
  name: string
  email: string
  phone: string
  eventDate: string
  eventTime: string
  numberOfGuests: string
  eventType: string
  budget: string
  message: string
  isDisabled: boolean
}

export interface PublicPartyFormState {
  name: string
  email: string
  phone: string
  eventTitle: string
  eventDate: string
  eventTime: string
  eventDescription: string
  ticketPrice: string
  expectedAttendance: string
  message: string
  isDisabled: boolean
}

export interface MediaInquiriesState {
  name: string
  email: string
  phone: string
  organization: string
  inquiryType: string
  eventDate: string
  message: string
  isDisabled: boolean
}

export interface MediaRequestFormState {
  name: string
  email: string
  phone: string
  organization: string
  eventTitle: string
  eventDate: string
  eventTime: string
  mediaType: string
  purpose: string
  message: string
  isDisabled: boolean
}

export interface MediaRequestFormProps {
  id?: string
  date?: string
  time?: string
  actEmail?: string
  eventId?: string
}

export interface SoundFormState {
  name: string
  email: string
  phone: string
  eventDate: string
  eventTime: string
  setupType: string
  numberOfInputs: string
  additionalEquipment: string
  budget: string
  message: string
  isDisabled: boolean
}

// Event handlers
export interface FormHandlers {
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void
  handleTextareaChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
  handleSelectChange: (e: ChangeEvent<HTMLSelectElement>) => void
}

// Airtable record structure
export interface AirtableRecord {
  id: string
  fields: Record<string, any>
  createdTime: string
}

// Common component props with router
export interface ComponentWithRouterProps {
  router: NextRouter
}

// Navigation item
export interface NavItem {
  name: string
  href: string
  current?: boolean
}

// Image props
export interface ImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
}

// SEO props
export interface SEOProps {
  title: string
  description?: string
  image?: string
  url?: string
}

// Profile props
export interface ProfileProps {
  name: string
  image: string
  bio?: string
}

// Today at Pete's props
export interface TodayAtPetesProps {
  events: CalendarEventData[]
}

// Anniversary shows props
export interface AnniversaryShowsProps {
  shows: CalendarEventData[]
}

// Title bar props
export interface TitleBarProps {
  title: string
  subtitle?: string
}

// Footer props
export interface FooterProps {
  year?: number
  links?: NavItem[]
}

// Render functions
export type RenderFunction<T = any> = (props: T) => React.JSX.Element

// Form validation
export interface ValidationError {
  field: string
  message: string
}

export interface FormValidation {
  isValid: boolean
  errors: ValidationError[]
}

// API response types
export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  error?: string
}

// Environment variables
export interface EnvironmentConfig {
  airtableApiKey: string
  airtableBaseId: string
  nodeEnv: string
}