import { useState } from 'react'
import { Check, Send } from 'lucide-react'
import { requirementTypes } from '../../data/siteData'

const emptyForm = { name: '', company: '', contact: '', teamSize: '', requirement: '', date: '', message: '' }

const CorporateEnquiryForm = () => {
  const [values, setValues] = useState(emptyForm)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const update = (event) => {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
    setErrors((current) => ({ ...current, [name]: '' }))
  }

  const submit = (event) => {
    event.preventDefault()
    const nextErrors = {}
    if (!values.name.trim()) nextErrors.name = 'Please tell us your name.'
    if (!values.company.trim()) nextErrors.company = 'Please add your company.'
    if (!values.contact.trim()) nextErrors.contact = 'Please add an email or phone number.'
    if (!values.teamSize || Number(values.teamSize) < 1) nextErrors.teamSize = 'Enter a valid team size.'
    if (!values.requirement) nextErrors.requirement = 'Choose a requirement.'
    if (!values.message.trim()) nextErrors.message = 'Share a few details about your order.'
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length === 0) setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="form-success" role="status">
        <span><Check size={26} /></span>
        <p className="eyebrow">Demo enquiry captured</p>
        <h3>Thanks, {values.name}.</h3>
        <p>This concept form does not send data yet. Connect the form adapter to your preferred service when the site goes live.</p>
        <button type="button" onClick={() => { setValues(emptyForm); setSubmitted(false) }}>Send another enquiry</button>
      </div>
    )
  }

  return (
    <form className="enquiry-form" onSubmit={submit} noValidate>
      <div className="field-grid">
        <label>Name<input name="name" value={values.name} onChange={update} aria-invalid={Boolean(errors.name)} /><small>{errors.name}</small></label>
        <label>Company<input name="company" value={values.company} onChange={update} aria-invalid={Boolean(errors.company)} /><small>{errors.company}</small></label>
        <label>Email or phone<input name="contact" value={values.contact} onChange={update} aria-invalid={Boolean(errors.contact)} /><small>{errors.contact}</small></label>
        <label>Team size<input name="teamSize" type="number" min="1" value={values.teamSize} onChange={update} aria-invalid={Boolean(errors.teamSize)} /><small>{errors.teamSize}</small></label>
        <label>Requirement<select name="requirement" value={values.requirement} onChange={update} aria-invalid={Boolean(errors.requirement)}><option value="">Select one</option>{requirementTypes.map((item) => <option key={item}>{item}</option>)}</select><small>{errors.requirement}</small></label>
        <label>Preferred date<input name="date" type="date" value={values.date} onChange={update} /></label>
      </div>
      <label>Tell us what you need<textarea name="message" rows="4" value={values.message} onChange={update} aria-invalid={Boolean(errors.message)} /><small>{errors.message}</small></label>
      <button className="button button--primary" type="submit">Send demo enquiry <Send size={17} /></button>
      <p className="form-note">Demo only — nothing is submitted or stored.</p>
    </form>
  )
}

export default CorporateEnquiryForm
