function CssComponent() {
  return (
    <div className="container">
    <h1>Bootstrap CSS</h1>
    <form>
      <div className="mb-2">
        <label className="form-label">Username</label>
        <input type="text" className="form-control" />
      </div>
      <div className="mb-2">
        <label className="form-label">Password</label>
        <input type="password" className="form-control" />
      </div>
      <button type="submit" className="btn btn-primary">Sign In</button>
    </form>
    </div>
  );
}
export default CssComponent;
