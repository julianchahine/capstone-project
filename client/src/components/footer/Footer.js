import React from 'react'
import { Link } from 'react-router-dom'

import './Footer.css'

import * as Cg from 'react-icons/cg'
import * as Fa from 'react-icons/fa'
import * as Bi from 'react-icons/bi'
import * as Io from 'react-icons/io'

function Footer() {
  return (
    <>
      <footer class="footer">
        <section class="footer__container">
          <nav class="footer__navigation">
            <ul class="footer__navigation__ul">
              <li class="footer__navigation__li">
                <Link to="/">
                  <Cg.CgNotes />
                </Link>
              </li>
              <li class="footer__navigation__li">
                <Link to="/voice">
                  <Fa.FaMicrophoneAlt />
                </Link>
              </li>
              <li class="footer__navigation__li">
                <Link to="/video">
                  <Bi.BiMovie />
                </Link>
              </li>
              <li class="footer__navigation__li">
                <Link>
                  <Cg.CgImage />
                </Link>
              </li>
            </ul>
          </nav>
        </section>
      </footer>
    </>
  )
}

export default Footer
