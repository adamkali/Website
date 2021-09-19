import React from 'react';
import '../static/site.css';
import logo from '../static/exchange-black.png'
import eth from '../static/Ethereum-Logo.wine.png'

function Support() {
    return (
        <div className='site-body'>
            <h2>Support</h2>
            <p>First I want to thank you for considering supporting me.

                I do not pay for advertising, I am runnig this off of donations for right now, so you taking the time to donate to me means a lot!
            </p>
            <h4> Ethereum </h4>
            <p><img className='crypto-logo' src={eth} alt=''/> <em>0x71b004Aa381B888406041be1d3651BcEcEB89D56</em></p>
            <h4> Solana </h4>
            <p><img className='crypto-logo' src={logo} alt=''/> <em>3vYuUvXk91TsZwunA4PF3iotUggy7paEz5VjYozwEkpd</em></p>
        </div>
    );
}

export default Support;