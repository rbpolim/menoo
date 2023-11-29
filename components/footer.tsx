import { Linkedin, Twitter } from 'lucide-react';

import { Logo } from "@/components/logo"

export const Footer = () => {
  var currentYear = new Date().getFullYear()

  return (
    <footer className="flex items-center w-full p-8 border-t shadow-sm">
      <div className="grid w-full max-w-6xl grid-cols-1 gap-4 mx-auto md:grid-cols-3 place-items-center place-content-between">
        <Logo />
        <p>{`Copyright © Rodrigo Polim ${currentYear}`}</p>
        <ul className='flex gap-x-4'>
          <li>
            <a
              href="https://twitter.com/rbpolim"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter size={24} />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/rbpolim/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={24} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}