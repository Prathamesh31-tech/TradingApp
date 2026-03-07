export default function Team() {
  return (
    <div className="container team-section">
      <h1 className="team-title">Meet Our Team</h1>
      <div className="team-member">
        <img src="media/images/photo.png" alt="member" />
        <div className="team-info">
          <h4>Ankit Mane</h4>
          <p className="role">Full Stack Developer</p>
          <p>
            Responsible for developing both frontend and backend of the trading
            platform using the MERN stack.
          </p>
        </div>
      </div>
      <div className="team-member">
        <img src="media/images/photo.png" alt="member" />
        <div className="team-info">
          <h4>Member Name</h4>
          <p className="role">Frontend Developer</p>
          <p>
            Designed responsive UI components and implemented user-friendly
            interfaces for the trading dashboard.
          </p>
        </div>
      </div>

      <div className="team-member">
        <img src="media/images/photo.png" alt="member" />
        <div className="team-info">
          <h4>Member Name</h4>
          <p className="role">Backend Developer</p>
          <p>
            Developed REST APIs, authentication system, and server logic for
            secure data handling.
          </p>
        </div>
      </div>

      <div className="team-member">
        <img src="media/images/photo.png" alt="member" />
        <div className="team-info">
          <h4>Member Name</h4>
          <p className="role">Database & Testing</p>
          <p>
            Managed MongoDB database design and performed testing to ensure
            system reliability.
          </p>
        </div>
      </div>
    </div>
  );
}
