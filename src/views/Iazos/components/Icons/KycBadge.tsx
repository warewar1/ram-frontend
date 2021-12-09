import React from 'react'
import IconProps from './types'

const KycBadge: React.FC<IconProps> = (props) => {
  return (
    <svg viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx={15} cy={15} r={14.5} stroke="#FFB300" />
      <path
        d="M14.882 14.502a.289.289 0 00-.197.357c.008.027.777 2.764.566 8.842a.287.287 0 10.575.02c.216-6.17-.554-8.908-.587-9.022a.289.289 0 00-.357-.197zM22.128 11.748A7.766 7.766 0 0014.963 7a7.738 7.738 0 00-2.996.6 9.308 9.308 0 00-1.484.78.288.288 0 00.314.483 8.72 8.72 0 011.392-.73 7.159 7.159 0 012.774-.557 7.19 7.19 0 016.633 4.397c.47 1.11.724 3.155.834 4.275a.288.288 0 10.573-.056c-.137-1.408-.4-3.322-.875-4.444zM9.629 9.8a.288.288 0 10-.405-.41c-1.55 1.526-3.093 4.365-1.647 9.22a.288.288 0 10.552-.165c-1.08-3.626-.561-6.615 1.5-8.645z"
        fill="#FFB300"
      />
      <path
        d="M15.184 8.733a6.05 6.05 0 00-6.045 7.69c.083.295.168.608.214.92.103.705.109 2.004.109 4.064a.288.288 0 10.576 0c0-2.15-.005-3.401-.115-4.148a7.735 7.735 0 00-.23-.993 5.474 5.474 0 015.47-6.957c2.05.073 4.372 1.88 5.072 3.944.607 1.786.612 4.83.537 7.57a.288.288 0 00.28.296.295.295 0 00.296-.28c.076-2.793.068-5.9-.567-7.772-.783-2.307-3.294-4.252-5.597-4.334z"
        fill="#FFB300"
      />
      <path
        d="M14.963 10.457c-.313 0-.625.034-.928.1a.288.288 0 00.125.563 3.739 3.739 0 014.252 2.2c.7 1.654.746 4.308.584 8.94a.287.287 0 00.278.298h.01a.288.288 0 00.288-.277c.168-4.819.117-7.422-.63-9.186a4.313 4.313 0 00-3.98-2.638zM12.822 11.707a.288.288 0 10-.33-.472c-1.485 1.042-2.13 3.044-1.604 4.984.006.02.59 2.15.59 5.475a.288.288 0 10.577 0c0-3.403-.587-5.541-.612-5.628-.461-1.704.093-3.456 1.38-4.36zM17.818 20.834a.288.288 0 00-.286-.29h-.002a.288.288 0 00-.288.286c-.002.217.005.533.013.875.011.497.024 1.06.012 1.422a.287.287 0 10.575.02c.014-.378 0-.95-.01-1.455a33.196 33.196 0 01-.014-.858z"
        fill="#FFB300"
      />
      <path
        d="M14.963 12.476c-.306 0-.605.06-.888.178-1.122.468-1.667 1.733-1.268 2.943.217.66.4 4.112.4 7.54a.288.288 0 10.577 0c0-3.086-.164-6.914-.43-7.72-.303-.921.102-1.88.943-2.231a1.727 1.727 0 012.259.924c.538 1.273.698 3.578.737 5.288a.289.289 0 00.288.281h.006a.289.289 0 00.282-.295c-.04-1.759-.21-4.142-.784-5.501a2.3 2.3 0 00-2.123-1.407z"
        fill="#FFB300"
      />
    </svg>
  )
}

export default React.memo(KycBadge)