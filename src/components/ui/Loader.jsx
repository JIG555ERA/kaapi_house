const Loader = () => {
  return (
    <div className="loader" role="status" aria-live="polite">
      <div className="loader__pour" aria-hidden="true">
        <span className="loader__filter" />
        <span className="loader__stream" />
        <span className="loader__tumbler" />
      </div>
      <p>Brewing your experience…</p>
    </div>
  )
}

export default Loader
