function Footer() {
  return (
    <footer className="bg-emerald-100 text-gray-800 flex justify-between items-center px-8 py-6 flex-wrap text-base shadow">
      <div className="flex-1">
        <p>Website Content Owned by Ministry Of Tribal Affairs, Government of India
          <br />
          Designed, Developed and Hosted by National Informatics Centre( NIC )
          <br />
          Last Updated: 04 Sep 2025
        </p>
      </div>
      <div className="flex items-center gap-x-2">
        <span className="font-semibold mr-2">Follow Us:</span>
        {/* X (Twitter) Icon */}
        <a
          href="https://x.com/TribalAffairsIn"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-gray-800 hover:text-emerald-500"
          aria-label="X"
        >
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path d="M17.53 3H21L14.47 10.39L22.13 21H15.81L10.97 14.41L5.5 21H2L9.03 13.09L1.63 3H8.09L12.52 9.03L17.53 3ZM16.37 19H18.13L7.75 5H5.87L16.37 19Z" fill="currentColor" />
          </svg>
        </a>
        {/* Instagram Icon */}
        <a
          href="https://www.instagram.com/tribalaffairsin/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-gray-800 hover:text-emerald-500"
          aria-label="Instagram"
        >
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5a5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5zm5.13.62a1.13 1.13 0 1 1-2.25 0a1.13 1.13 0 0 1 2.25 0z" fill="currentColor" />
          </svg>
        </a>
        {/* Facebook Icon */}
        <a
          href="https://www.facebook.com/TribalAffairsIn/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-gray-800 hover:text-emerald-500"
          aria-label="Facebook"
        >
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.326 24h11.495v-9.294H9.691v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.405 24 24 23.408 24 22.674V1.326C24 .592 23.405 0 22.675 0" fill="currentColor" />
          </svg>
        </a>
        {/* YouTube Icon */}
        <a
          href="https://www.youtube.com/c/MinistryofTribalAffairs/videos"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-gray-800 hover:text-emerald-500"
          aria-label="YouTube"
        >
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path d="M23.498 6.186a2.994 2.994 0 00-2.108-2.116C19.545 3.5 12 3.5 12 3.5s-7.545 0-9.39.57A2.994 2.994 0 00.502 6.186C0 8.03 0 12 0 12s0 3.97.502 5.814a2.994 2.994 0 002.108 2.116C4.455 20.5 12 20.5 12 20.5s7.545 0 9.39-.57a2.994 2.994 0 002.108-2.116C24 15.97 24 12 24 12s0-3.97-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" fill="currentColor" />
          </svg>
        </a>
      </div>
    </footer>
  )
}

export default Footer