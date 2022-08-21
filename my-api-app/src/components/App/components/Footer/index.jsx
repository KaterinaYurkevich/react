import React from 'react'
import { Container } from 'react-bootstrap'

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <Container className='text-center'>
        <div className='footer_contacts'>
          <p class="our-contacts-adress-email">E-mail:&nbsp; 
             <a href="mailto:wildvacation@gmail.com">wildvacation@gmail.com</a>
          </p>
          <p class="our-contacts-adress-adress">Адрес:&nbsp;
            <span>Немига 5а, офис 18,  Минск</span>
          </p>
          <p>Mobile:&nbsp; 
            <div class="box-phone">
              <p><a href="tel:+375 33 888-44-22">+375 33 888-44-22</a></p>
              <p><a href="tel:+375 29 963-85-21">+375 29 963-85-21</a></p>
            </div>
          </p>
        </div>
        <b>Created at {currentYear}</b>
      </Container>
    </footer>
  )
}
