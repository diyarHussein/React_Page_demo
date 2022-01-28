import "./HeaderElement.css";
import "../../index.css";
import { Link } from "react-router-dom";
function HeaderElement() {
  return (
    <header className="header">
      <div className="container">
        <nav className="header__nav">
          <div className="header__logo">Diyar Hussein</div>
          <ul className="links">
            <li className="links__item">
              <Link className="links__item__link" to="#">
                Home
              </Link>
            </li>
            <li className="links__item">
              <Link className="links__item__link" to="#landing">
                Landing
              </Link>
            </li>
            <li className="links__item">
              <Link className="links__item__link" to="#services">
                Services
              </Link>
            </li>
            <li className="links__item">
              <Link className="links__item__link" to="#contact">
                Contact
              </Link>
            </li>
          </ul>
          <i className="fas fa-bars toggle-menu"></i>
        </nav>
      </div>
      <section className="header__landing">
        <div className="info">
          <h1 className="info__title">My Special Page</h1>
          <p className="info__text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti
            praesentium id.
          </p>
        </div>

        <svg
          width="811"
          height="559"
          viewBox="0 0 811 559"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="undraw_new_year_2022_bxec 1">
            <g id="rest">
              <path
                id="Vector"
                d="M58.1882 115.294C56.1354 124.533 55.1598 135.008 60.635 143.277C62.9623 146.824 66.3777 149.474 70.3408 150.809C74.3523 152.028 78.582 152.294 82.7088 151.588C92.0476 150.262 100.347 145.279 109.532 143.344C113.585 142.49 117.886 142.208 121.788 143.851C124.711 145.082 127.791 147.558 127.805 151.089C127.819 154.715 124.745 157.121 121.688 158.236C117.608 159.724 113.369 159.148 109.138 158.961C104.58 158.759 99.9336 159.181 96.1478 162.04C92.8917 164.644 90.3947 168.112 88.9282 172.068C87.0253 176.799 86.2529 181.886 85.0362 186.823C83.9486 191.261 82.4101 195.57 80.446 199.68C76.5921 207.735 71.1894 214.909 64.5623 220.773C61.2938 223.655 57.3225 226.59 52.8587 226.854C49.4158 227.058 45.2306 225.576 43.9035 222.003C43.4105 220.461 43.4588 218.79 44.04 217.28C44.6212 215.771 45.6988 214.516 47.0868 213.733C50.0374 212.208 53.2508 214.384 54.2036 217.371C54.4536 218.059 54.541 218.798 54.4587 219.528C54.3764 220.258 54.1268 220.957 53.7302 221.569C52.8355 222.936 54.9908 224.214 55.8795 222.856C57.9428 219.704 56.8643 215.465 54.3373 212.94C53.1045 211.652 51.4565 210.868 49.7009 210.734C47.9452 210.6 46.202 211.125 44.7965 212.211C43.3363 213.35 42.2323 214.901 41.6202 216.674C41.0081 218.447 40.9144 220.364 41.3506 222.19C42.4121 226.114 46.1759 228.61 49.9345 229.229C54.576 229.993 59.0429 228.124 62.7895 225.424C66.5487 222.644 69.9667 219.409 72.9693 215.79C79.0739 208.598 83.663 200.192 86.4491 191.098C89.1888 182.104 89.3881 170.222 97.529 164.148C101.718 161.022 106.851 161.369 111.763 161.656C116.098 161.909 120.328 161.863 124.305 159.852C127.59 158.192 130.239 155.127 130.294 151.222C130.349 147.28 127.618 144.111 124.399 142.315C115.896 137.571 105.686 141.397 97.3325 144.567C88.9322 147.754 79.3413 151.495 70.414 148.141C66.2938 146.5 62.9766 143.253 61.1897 139.111C59.0279 134.414 58.7203 129.085 59.2197 123.988C59.5141 121.29 59.9712 118.612 60.5884 115.972C60.9434 114.374 58.5441 113.692 58.1882 115.294L58.1882 115.294Z"
                fill="#3F3D56"
              />
              <path
                id="Vector_2"
                d="M395.969 155.926C400.094 155.926 403.439 153.543 403.439 150.602C403.439 147.662 400.094 145.279 395.969 145.279C391.844 145.279 388.499 147.662 388.499 150.602C388.499 153.543 391.844 155.926 395.969 155.926Z"
                fill="#E6E6E6"
              />
              <path
                id="Vector_3"
                d="M443.386 167.904C447.511 167.904 450.856 165.521 450.856 162.581C450.856 159.64 447.511 157.257 443.386 157.257C439.26 157.257 435.916 159.64 435.916 162.581C435.916 165.521 439.26 167.904 443.386 167.904Z"
                fill="#3F3D56"
              />
              <path
                id="Vector_4"
                d="M377.132 193.857C381.258 193.857 384.602 191.473 384.602 188.533C384.602 185.593 381.258 183.21 377.132 183.21C373.007 183.21 369.662 185.593 369.662 188.533C369.662 191.473 373.007 193.857 377.132 193.857Z"
                fill="#FF6584"
              />
              <path
                id="Vector_5"
                d="M592.782 233.784C596.907 233.784 600.251 231.401 600.251 228.46C600.251 225.52 596.907 223.137 592.782 223.137C588.656 223.137 585.312 225.52 585.312 228.46C585.312 231.401 588.656 233.784 592.782 233.784Z"
                fill="#E6E6E6"
              />
              <path
                id="Vector_6"
                d="M573.945 271.715C578.07 271.715 581.415 269.331 581.415 266.391C581.415 263.451 578.07 261.068 573.945 261.068C569.819 261.068 566.475 263.451 566.475 266.391C566.475 269.331 569.819 271.715 573.945 271.715Z"
                fill="#FF6584"
              />
              <path
                id="Vector_7"
                d="M578.492 112.672C582.617 112.672 585.961 110.288 585.961 107.348C585.961 104.408 582.617 102.024 578.492 102.024C574.366 102.024 571.022 104.408 571.022 107.348C571.022 110.288 574.366 112.672 578.492 112.672Z"
                fill="#E6E6E6"
              />
              <path
                id="Vector_8"
                d="M625.908 124.65C630.034 124.65 633.378 122.266 633.378 119.326C633.378 116.386 630.034 114.003 625.908 114.003C621.783 114.003 618.439 116.386 618.439 119.326C618.439 122.266 621.783 124.65 625.908 124.65Z"
                fill="#3F3D56"
              />
              <path
                id="Vector_9"
                d="M559.655 150.602C563.78 150.602 567.125 148.219 567.125 145.279C567.125 142.339 563.78 139.955 559.655 139.955C555.529 139.955 552.185 142.339 552.185 145.279C552.185 148.219 555.529 150.602 559.655 150.602Z"
                fill="#FF6584"
              />
              <path
                id="Vector_10"
                d="M452.381 338.121C454.989 338.121 457.102 336.615 457.102 334.757C457.102 332.899 454.989 331.392 452.381 331.392C449.774 331.392 447.661 332.899 447.661 334.757C447.661 336.615 449.774 338.121 452.381 338.121Z"
                fill="#E6E6E6"
              />
              <path
                id="Vector_11"
                d="M482.349 345.692C484.956 345.692 487.07 344.185 487.07 342.327C487.07 340.469 484.956 338.963 482.349 338.963C479.742 338.963 477.628 340.469 477.628 342.327C477.628 344.185 479.742 345.692 482.349 345.692Z"
                fill="#3F3D56"
              />
              <path
                id="Vector_12"
                d="M440.477 362.094C443.084 362.094 445.197 360.587 445.197 358.729C445.197 356.871 443.084 355.365 440.477 355.365C437.869 355.365 435.756 356.871 435.756 358.729C435.756 360.587 437.869 362.094 440.477 362.094Z"
                fill="#FF6584"
              />
              <path
                id="Vector_13"
                d="M441.989 224.994C444.596 224.994 446.71 223.488 446.71 221.63C446.71 219.772 444.596 218.265 441.989 218.265C439.381 218.265 437.268 219.772 437.268 221.63C437.268 223.488 439.381 224.994 441.989 224.994Z"
                fill="#E6E6E6"
              />
              <path
                id="Vector_14"
                d="M471.956 232.565C474.563 232.565 476.677 231.058 476.677 229.2C476.677 227.342 474.563 225.836 471.956 225.836C469.349 225.836 467.235 227.342 467.235 229.2C467.235 231.058 469.349 232.565 471.956 232.565Z"
                fill="#3F3D56"
              />
              <path
                id="Vector_15"
                d="M430.084 248.967C432.691 248.967 434.805 247.46 434.805 245.602C434.805 243.744 432.691 242.238 430.084 242.238C427.477 242.238 425.363 243.744 425.363 245.602C425.363 247.46 427.477 248.967 430.084 248.967Z"
                fill="#FF6584"
              />
              <path
                id="Vector_16"
                d="M292.593 244.958C295.2 244.958 297.314 243.452 297.314 241.593C297.314 239.735 295.2 238.229 292.593 238.229C289.986 238.229 287.872 239.735 287.872 241.593C287.872 243.452 289.986 244.958 292.593 244.958Z"
                fill="#E6E6E6"
              />
              <path
                id="Vector_17"
                d="M322.56 252.528C325.168 252.528 327.281 251.022 327.281 249.164C327.281 247.305 325.168 245.799 322.56 245.799C319.953 245.799 317.84 247.305 317.84 249.164C317.84 251.022 319.953 252.528 322.56 252.528Z"
                fill="#3F3D56"
              />
              <path
                id="Vector_18"
                d="M280.688 268.93C283.295 268.93 285.409 267.424 285.409 265.566C285.409 263.708 283.295 262.201 280.688 262.201C278.081 262.201 275.967 263.708 275.967 265.566C275.967 267.424 278.081 268.93 280.688 268.93Z"
                fill="#FF6584"
              />
              <path
                id="Vector_19"
                d="M74.5767 143.422C75.6768 143.58 76.7297 143.983 77.6612 144.603C78.5928 145.223 79.3804 146.044 79.9685 147.01C80.5567 147.975 80.931 149.061 81.0653 150.19C81.1995 151.32 81.0904 152.466 80.7455 153.548L111.975 217.085L98.6718 221.148L70.6216 158.428C68.8862 157.714 67.4667 156.373 66.6321 154.658C65.7975 152.944 65.6058 150.975 66.0933 149.126C66.5809 147.276 67.7137 145.674 69.2773 144.623C70.8409 143.571 72.7265 143.144 74.5768 143.422H74.5767Z"
                fill="#FFB6B6"
              />
              <path
                id="Vector_20"
                d="M125.366 251.383C125.366 251.383 129.237 250.296 125.409 242.516C122.343 236.288 107.133 196.247 100.796 189.062C101.55 187.946 101.921 186.605 101.85 185.25C101.778 183.894 101.269 182.602 100.401 181.576L84.4445 193.318C83.938 197.848 85.9479 201.365 87.6949 201.297L92.5413 212.875L104.915 252.656L122.582 252.22L125.366 251.383Z"
                fill="#6C63FF"
              />
              <path
                id="Vector_21"
                d="M120.377 273L121.932 287.775L121.017 307.149L162.905 302.051L166.841 273L161.826 273.051L120.377 273Z"
                fill="#FFB6B6"
              />
              <path
                id="Vector_22"
                d="M156.007 225.278L140.243 212.528L131.967 212.035L119.688 220.094L109.394 225.464L109.571 253.504L121.406 303.717L163.721 302.017L169.291 266.211C169.291 266.211 182.23 248.406 168.296 238.209L156.007 225.278Z"
                fill="#6C63FF"
              />
              <path
                id="Vector_23"
                d="M98.6506 541.246H107.809L112.167 505.057H98.6506V541.246Z"
                fill="#FFB6B6"
              />
              <path
                id="Vector_24"
                d="M95.6618 534.82L110.293 533.926V540.348L124.203 550.19C124.89 550.676 125.408 551.374 125.68 552.183C125.952 552.991 125.965 553.868 125.716 554.685C125.468 555.501 124.971 556.215 124.299 556.722C123.626 557.229 122.813 557.502 121.978 557.502H104.559L101.557 551.15L100.385 557.502H93.817L95.6618 534.82Z"
                fill="#2F2E41"
              />
              <path
                id="Vector_25"
                d="M150.092 541.246H159.251L163.608 505.057H150.092V541.246Z"
                fill="#FFB6B6"
              />
              <path
                id="Vector_26"
                d="M147.104 534.82L161.735 533.926V540.348L175.645 550.19C176.332 550.676 176.849 551.374 177.122 552.183C177.394 552.991 177.407 553.868 177.158 554.685C176.91 555.501 176.413 556.215 175.74 556.722C175.068 557.229 174.255 557.502 173.42 557.502H156.001L152.999 551.15L151.826 557.502H145.259L147.104 534.82Z"
                fill="#2F2E41"
              />
              <path
                id="Vector_27"
                d="M94.6993 510.039H94.7988L96.5601 451.197C95.4203 448.945 94.8419 446.439 94.8763 443.902C94.9106 441.365 95.5568 438.876 96.7572 436.657L97.0093 436.19L96.3555 433.085C95.5158 429.096 95.9011 424.938 97.4587 421.182L99.1018 366.294C93.2317 327.319 121.207 301.901 121.207 301.901H163.114L172.111 333.57C178.059 392.936 176.979 450.787 167.541 506.834L167.798 506.967C168.725 507.295 169.122 508.61 168.686 509.904C168.25 511.199 167.145 511.983 166.219 511.655L144.087 510.866C143.161 510.539 142.763 509.224 143.199 507.929C143.636 506.635 144.74 505.851 145.667 506.179L147.171 506.958L143.962 450.179L144.318 439.807L143.585 428.041L140.192 375.118L127.352 440.199L114.235 510.694C114.597 511.029 114.851 511.469 114.964 511.956C115.076 512.442 115.042 512.952 114.866 513.419C114.69 513.885 114.379 514.285 113.976 514.567C113.573 514.849 113.096 514.999 112.608 514.998H94.6993C94.0574 514.998 93.4418 514.737 92.9879 514.272C92.534 513.807 92.279 513.176 92.279 512.518C92.279 511.861 92.534 511.23 92.9879 510.765C93.4418 510.3 94.0574 510.039 94.6993 510.039V510.039Z"
                fill="#2F2E41"
              />
              <path
                id="Vector_28"
                d="M156.729 347.174C157.592 346.458 158.292 345.556 158.778 344.533C159.264 343.51 159.525 342.39 159.543 341.252C159.561 340.114 159.335 338.986 158.882 337.947C158.428 336.908 157.758 335.984 156.918 335.24L152.935 264.616L138.248 267.851L145.787 336.407C144.66 337.936 144.119 339.835 144.267 341.745C144.415 343.655 145.241 345.443 146.59 346.77C147.939 348.097 149.716 348.871 151.585 348.946C153.454 349.02 155.284 348.39 156.729 347.174H156.729Z"
                fill="#FFB6B6"
              />
              <path
                id="Vector_29"
                d="M145.899 227.843C145.899 227.843 149.763 226.729 150.399 235.418C150.908 242.373 158.032 284.715 156.219 294.219C157.427 294.776 158.42 295.73 159.041 296.928C159.662 298.127 159.876 299.504 159.65 300.841L140.068 299.212C137.353 295.598 137.305 291.523 138.836 290.658L137.16 278.178L127.737 237.558L143.092 228.597L145.899 227.843Z"
                fill="#6C63FF"
              />
              <path
                id="Vector_30"
                d="M133.186 210.586C144.127 210.586 152.996 201.5 152.996 190.291C152.996 179.082 144.127 169.996 133.186 169.996C122.246 169.996 113.377 179.082 113.377 190.291C113.377 201.5 122.246 210.586 133.186 210.586Z"
                fill="#FFB8B8"
              />
              <path
                id="Vector_31"
                d="M90.4974 232.943C86.3054 231.421 82.1133 229.896 77.9212 228.369C78.6438 227.127 79.564 226.017 80.6437 225.086C84.635 221.671 90.1441 221.054 95.2116 219.903C100.287 218.751 105.796 216.389 107.651 211.42C109.579 206.253 106.784 200.675 105.162 195.409C102.889 188.062 102.937 179.86 105.981 172.817C109.025 165.774 115.208 160.064 122.549 158.386C129.889 156.716 138.185 159.439 142.698 165.593C145.606 164.699 148.732 164.927 151.487 166.234C154.242 167.541 156.435 169.835 157.651 172.685C158.703 175.384 158.735 178.634 157.169 181.061C155.603 183.488 152.255 184.73 149.733 183.381L151.194 179.58C146.673 181.151 143.734 189.527 144.344 194.381C144.946 199.227 147.709 203.472 150.512 207.43C153.315 211.387 156.302 215.386 157.507 220.116C159.241 226.921 156.896 234.358 152.56 239.813C148.223 245.268 142.112 248.97 135.783 251.694C131.046 253.734 126.123 255.288 121.087 256.334C121.986 254.54 122.878 252.747 123.777 250.953L113.104 257.568C111.04 257.774 108.96 257.897 106.88 257.938C100.825 258.045 94.6496 257.395 89.1082 254.919C83.559 252.434 78.6842 247.934 76.6765 242.084C76.0328 240.192 75.7282 238.196 75.7772 236.193C80.6838 235.107 85.5905 234.024 90.4974 232.943Z"
                fill="#2F2E41"
              />
              <path
                id="Vector_32"
                d="M49.4741 106.457L68.914 106.905C70.5163 106.941 70.5159 104.391 68.914 104.355L49.4741 103.907C47.8718 103.87 47.8722 106.42 49.4741 106.457Z"
                fill="#3F3D56"
              />
              <path
                id="Vector_33"
                d="M248.104 557.638C247.468 559.57 0.686907 559.388 0 557.461C0.63588 555.525 247.417 555.706 248.104 557.638Z"
                fill="#CCCCCC"
              />
            </g>
            <path
              id="seilR"
              d="M663.994 78.1512C662.405 81.5287 663.342 85.4309 665.441 88.3469C667.828 91.6637 671.625 93.2988 675.52 93.8392C679.701 94.359 683.942 94.0013 687.984 92.7878C691.882 91.635 695.929 89.1641 696.733 84.7498C697.269 81.8077 696.044 78.668 693.062 77.8524C691.865 77.5425 690.611 77.5536 689.421 77.8846C688.23 78.2155 687.143 78.8552 686.263 79.7419C683.787 82.3824 683.975 86.6203 685.549 89.6872C687.4 93.2941 691.104 95.2846 694.912 95.9414C699.439 96.7223 703.988 95.6315 708.247 94.0794C712.876 92.3925 717.366 90.2919 721.902 88.3623C730.747 84.5993 739.782 81.0643 749.294 79.5656C763.824 77.2762 781.068 80.8411 789.962 93.8917C794.764 100.937 796.124 109.772 795.091 118.177C794.001 127.041 790.205 135.187 785.177 142.4C782.516 146.152 779.609 149.715 776.478 153.065C775.459 154.081 774.757 155.384 774.462 156.808C774.168 158.233 774.293 159.716 774.823 161.068C777.579 168.004 788.596 165.793 789.417 158.643C789.79 155.395 788.02 152.049 785.81 149.845C783.301 147.441 780.14 145.872 776.743 145.345C769.594 144.122 762.038 146.838 756.573 151.555C750.4 156.883 746.924 164.981 745.093 172.864C743.009 181.839 742.903 191.071 742.705 200.245C742.502 209.633 742.154 219.133 739.525 228.195C737.387 235.488 734.086 242.369 729.757 248.559C721.109 261.031 708.817 270.364 694.654 275.21C691.228 276.349 687.715 277.192 684.152 277.73C682.757 277.942 682.59 275.704 683.979 275.493C699.512 273.134 713.795 264.518 724.02 252.408C729.145 246.366 733.194 239.45 735.986 231.974C739.32 222.97 740.166 213.406 740.438 203.85C740.716 194.09 740.564 184.241 742.472 174.627C744.158 166.127 747.465 157.521 753.591 151.328C756.312 148.55 759.556 146.367 763.125 144.91C766.693 143.453 770.514 142.753 774.354 142.852C781.459 143.189 789.057 147.198 791.168 154.625C791.713 156.313 791.793 158.123 791.398 159.855C791.004 161.587 790.15 163.173 788.932 164.44C787.451 165.878 785.61 166.869 783.614 167.301C781.617 167.734 779.543 167.591 777.62 166.889C775.532 165.963 773.854 164.275 772.914 162.152C771.973 160.029 771.837 157.624 772.533 155.404C773.117 153.774 774.056 152.302 775.279 151.1C781.689 144.087 787.571 136.239 790.763 127.107C793.74 118.59 794.351 108.792 790.918 100.317C784.417 84.2722 765.553 79.4511 750.186 81.6936C740.13 83.1612 730.608 87.0618 721.292 91.0517C716.535 93.0892 711.809 95.3535 706.876 96.9131C702.459 98.3094 697.719 99.0106 693.168 97.8654C689.196 96.8659 685.546 94.5 683.622 90.7152C681.874 87.2773 681.572 82.9149 683.651 79.5468C686.656 74.6772 694.953 73.5818 697.977 79.0512C699.983 82.6803 698.998 87.3275 696.363 90.3373C693.409 93.7117 688.985 95.09 684.751 95.7856C676.752 97.1001 666.901 96.0671 662.621 87.9722C661.69 86.351 661.15 84.5257 661.046 82.6478C660.942 80.77 661.276 78.8938 662.022 77.175C662.154 76.9173 662.379 76.7224 662.649 76.6314C662.919 76.5403 663.213 76.5602 663.469 76.6869C663.724 76.8136 663.922 77.0371 664.02 77.3103C664.119 77.5835 664.109 77.8851 663.994 78.1514L663.994 78.1512Z"
              fill="#3F3D56"
            />
            <path
              id="seilL"
              d="M332.528 118.102C334.118 121.48 333.181 125.382 331.082 128.298C328.695 131.615 324.898 133.25 321.002 133.79C316.821 134.31 312.581 133.953 308.539 132.739C304.64 131.586 300.594 129.115 299.79 124.701C299.254 121.759 300.479 118.619 303.461 117.804C304.658 117.494 305.911 117.505 307.102 117.836C308.293 118.167 309.38 118.806 310.26 119.693C312.736 122.334 312.547 126.572 310.974 129.638C309.123 133.245 305.419 135.236 301.611 135.893C297.084 136.674 292.535 135.583 288.276 134.031C283.647 132.344 279.156 130.243 274.621 128.314C265.776 124.55 256.741 121.016 247.229 119.517C232.699 117.227 215.455 120.792 206.56 133.843C201.759 140.888 200.399 149.723 201.432 158.128C202.522 166.992 206.318 175.138 211.345 182.351C214.007 186.103 216.914 189.666 220.045 193.016C221.064 194.032 221.766 195.335 222.06 196.76C222.355 198.185 222.23 199.667 221.7 201.019C218.944 207.955 207.927 205.745 207.106 198.595C206.733 195.346 208.502 192 210.713 189.796C213.222 187.392 216.383 185.824 219.779 185.297C226.928 184.073 234.485 186.789 239.95 191.506C246.123 196.835 249.599 204.932 251.429 212.816C253.514 221.791 253.62 231.022 253.818 240.196C254.021 249.585 254.369 259.084 256.998 268.146C259.136 275.439 262.437 282.32 266.766 288.511C275.413 300.982 287.706 310.315 301.869 315.161C305.295 316.3 308.808 317.143 312.371 317.681C313.766 317.893 313.932 315.655 312.543 315.444C297.011 313.085 282.728 304.47 272.503 292.359C267.378 286.317 263.328 279.401 260.537 271.926C257.203 262.922 256.357 253.357 256.085 243.801C255.807 234.041 255.958 224.193 254.051 214.578C252.365 206.079 249.058 197.472 242.932 191.279C240.211 188.501 236.967 186.318 233.398 184.861C229.83 183.404 226.009 182.704 222.169 182.803C215.064 183.14 207.466 187.149 205.355 194.576C204.809 196.265 204.73 198.074 205.124 199.806C205.519 201.538 206.373 203.124 207.591 204.391C209.072 205.83 210.912 206.82 212.909 207.253C214.906 207.685 216.98 207.542 218.902 206.84C220.991 205.914 222.669 204.226 223.609 202.103C224.55 199.98 224.685 197.575 223.99 195.355C223.406 193.725 222.466 192.253 221.244 191.051C214.834 184.038 208.952 176.19 205.76 167.058C202.783 158.541 202.172 148.743 205.605 140.268C212.106 124.223 230.97 119.402 246.337 121.645C256.393 123.112 265.915 127.013 275.231 131.003C279.988 133.04 284.714 135.305 289.647 136.864C294.064 138.261 298.804 138.962 303.355 137.817C307.327 136.817 310.977 134.451 312.901 130.666C314.649 127.228 314.95 122.866 312.872 119.498C309.867 114.628 301.57 113.533 298.546 119.002C296.54 122.631 297.525 127.279 300.16 130.288C303.114 133.663 307.538 135.041 311.772 135.737C319.771 137.051 329.622 136.018 333.902 127.923C334.833 126.302 335.373 124.477 335.477 122.599C335.581 120.721 335.246 118.845 334.501 117.126C334.369 116.868 334.144 116.673 333.874 116.582C333.604 116.491 333.31 116.511 333.054 116.638C332.798 116.765 332.6 116.988 332.502 117.261C332.404 117.535 332.414 117.836 332.529 118.103L332.528 118.102Z"
              fill="#3F3D56"
            />
            <path
              id="zero"
              d="M500.46 228.609C500.289 220.584 499.649 212.577 498.544 204.631C497.576 197.327 496.172 190.091 494.339 182.963C492.516 175.909 490.167 169.009 487.314 162.324C485.116 156.984 482.309 151.93 478.951 147.266C475.621 142.776 471.796 138.54 466.879 135.841C464.767 134.638 462.488 133.77 460.122 133.269C459.796 133.206 459.473 133.164 459.152 133.133C458.928 133.094 458.7 133.062 458.467 133.041C451.485 132.331 444.438 133.334 437.909 135.965C431.411 138.66 425.599 142.838 420.917 148.182C416.313 153.528 412.592 159.608 409.901 166.182C406.909 173.357 404.744 180.865 403.449 188.553C402.056 196.755 401.402 205.071 401.495 213.396C401.613 221.79 402.441 230.157 403.97 238.404C405.307 245.866 407.371 253.171 410.132 260.211C412.756 267.163 416.277 273.725 420.602 279.72C424.94 285.521 429.99 290.694 436.204 294.391C439.185 296.164 442.364 297.563 445.672 298.559C448.566 299.536 451.525 300.3 454.525 300.847C457.661 301.395 460.854 301.516 464.022 301.206C467.413 300.817 470.727 299.908 473.855 298.509C479.23 296.123 483.51 291.942 487.015 287.227C490.528 282.266 493.24 276.76 495.049 270.919C497.168 264.215 498.619 257.309 499.379 250.306C500.248 243.11 500.609 235.858 500.46 228.609V228.609ZM487.722 241.84C487.538 244.751 487.262 247.654 486.893 250.549C486.131 256.293 484.852 261.954 483.073 267.457C482.671 268.665 482.228 269.858 481.76 271.041C480.434 274.225 478.772 277.25 476.803 280.062L476.777 280.099C476.578 280.351 476.381 280.604 476.176 280.85C475.658 281.474 475.117 282.078 474.555 282.662C473.989 283.247 473.4 283.808 472.788 284.345C472.633 284.482 472.472 284.612 472.312 284.744C472.235 284.801 472.158 284.86 472.08 284.916C469.59 286.836 466.659 288.066 463.57 288.488C461.437 288.704 459.288 288.687 457.159 288.436C455.262 288.119 453.389 287.668 451.553 287.087C449.666 286.49 447.767 285.912 445.926 285.176C443.914 284.251 441.985 283.149 440.159 281.882C439.668 281.54 439.188 281.183 438.71 280.822C438.551 280.691 438.391 280.561 438.234 280.428C437.231 279.578 436.265 278.685 435.336 277.75C434.405 276.816 433.511 275.846 432.653 274.839C432.199 274.308 431.755 273.769 431.321 273.221C431.186 273.05 431.054 272.878 430.921 272.707C429.261 270.432 427.741 268.054 426.368 265.586C424.858 262.866 423.497 260.063 422.29 257.189C419.464 250.068 417.353 242.67 415.989 235.111C415.616 233.093 415.299 231.065 415.018 229.031C413.901 220.153 413.646 211.183 414.256 202.253C414.42 199.908 414.657 197.569 414.949 195.237C415.813 188.831 417.267 182.523 419.291 176.398C419.801 174.882 420.361 173.385 420.955 171.903C422.799 167.496 425.123 163.317 427.883 159.445C427.917 159.399 427.968 159.329 428.024 159.253L428.061 159.205C428.451 158.707 428.849 158.217 429.257 157.734C429.996 156.86 430.765 156.015 431.565 155.199C432.391 154.358 433.249 153.552 434.139 152.782C434.336 152.612 434.722 152.305 435.003 152.082C435.248 151.897 435.491 151.707 435.741 151.529C439.846 148.477 444.634 146.531 449.664 145.868C452.291 145.579 454.939 145.533 457.575 145.732C458.247 145.893 458.91 146.095 459.56 146.335C460.876 146.976 462.131 147.739 463.31 148.616C463.356 148.655 463.403 148.693 463.449 148.732C463.808 149.039 464.16 149.355 464.504 149.679C465.235 150.365 465.934 151.086 466.605 151.834C467.267 152.571 467.9 153.336 468.51 154.119C468.588 154.226 468.666 154.332 468.743 154.44C469.066 154.89 469.382 155.345 469.69 155.806C471.033 157.818 472.268 159.904 473.391 162.053C474.605 164.359 475.702 166.728 476.719 169.131C480.547 178.831 483.374 188.915 485.156 199.218C485.675 202.083 486.12 204.961 486.511 207.848C487.981 219.112 488.386 230.495 487.722 241.84V241.84Z"
              fill="#2F2E41"
            />
            <path
              id="balon"
              d="M103.735 55.273C103.735 27.1056 83.5424 0 58.7977 0C34.053 0 14.127 27.1056 14.127 55.273C14.127 80.006 29.5948 100.622 50.1186 105.282C48.9454 108.752 48.2804 112.381 48.145 116.05C48.145 123.796 52.3824 116.454 58.7977 116.454C65.213 116.454 71.3768 123.796 71.3768 116.05C71.2308 112.243 70.5217 108.482 69.2737 104.893C89.0298 99.5768 103.735 79.3863 103.735 55.273Z"
              fill="#6C63FF"
            />
            <g id="twoL">
              <path
                id="Vector_34"
                d="M358.024 354.163C346.517 353.436 335.003 352.851 323.485 352.326C315.724 351.972 307.955 351.682 300.203 351.145C297.483 350.956 294.761 350.733 292.056 350.381C291.346 350.274 290.634 350.154 289.928 350.007C290.032 349.875 290.134 349.742 290.239 349.611C290.796 348.921 291.368 348.245 291.949 347.576C295.019 344.037 298.27 340.662 301.475 337.251C305.993 332.443 310.476 327.601 314.851 322.655C320.538 316.223 326.044 309.629 331.367 302.873C332.873 300.957 334.364 299.029 335.839 297.088C336.872 295.73 337.899 294.368 338.921 293.001C339.306 292.486 339.69 291.97 340.074 291.453C340.252 291.212 340.43 290.971 340.608 290.73C340.783 290.493 341.547 289.467 340.992 290.2C341.32 289.765 341.648 289.331 341.976 288.896C342.197 288.6 342.418 288.304 342.637 288.007C343.14 287.324 343.635 286.634 344.122 285.937C344.999 284.68 345.847 283.402 346.664 282.103C348.214 279.646 349.639 277.109 350.934 274.502C355.765 264.752 358.927 253.973 358.862 242.965C358.902 233.725 356.411 224.658 351.673 216.796C347.081 209.352 340.436 203.473 332.58 199.902C328.008 197.879 323.174 196.544 318.23 195.939C313.416 195.399 308.554 195.513 303.77 196.279C292.788 197.839 282.257 202.644 273.045 208.85C270.109 210.829 267.303 212.99 264.544 215.219C263.378 216.161 262.721 218.283 262.721 219.727C262.733 221.415 263.387 223.032 264.544 224.235C265.713 225.427 267.295 226.098 268.944 226.102C270.574 226.005 272.125 225.347 273.344 224.235C273.472 224.131 273.601 224.028 273.73 223.924C274.118 223.622 274.509 223.322 274.901 223.024C275.729 222.398 276.567 221.784 277.413 221.183C279.089 219.994 280.802 218.861 282.551 217.784C285.565 215.931 288.693 214.278 291.914 212.836C296.572 210.869 301.441 209.474 306.42 208.681C310.109 208.235 313.835 208.213 317.529 208.613C320.787 209.112 323.977 209.998 327.035 211.253C328.433 211.901 329.791 212.634 331.104 213.447C331.911 213.95 332.699 214.483 333.467 215.046C333.575 215.125 333.814 215.309 334.019 215.466C334.214 215.628 334.407 215.792 334.598 215.959C335.999 217.174 337.309 218.495 338.519 219.909C338.804 220.242 339.083 220.58 339.356 220.923C339.397 220.974 339.437 221.027 339.478 221.079C340.005 221.81 340.508 222.559 340.985 223.326C341.956 224.901 342.818 226.545 343.565 228.244C344.78 231.371 345.64 234.631 346.125 237.959C346.515 241.732 346.494 245.537 346.062 249.305C345.299 254.348 343.953 259.281 342.052 263.998C339.839 269.13 337.137 274.026 333.987 278.615C333.546 279.261 333.099 279.902 332.643 280.536C332.43 280.833 332.216 281.129 331.999 281.424C331.916 281.538 331.635 281.914 331.483 282.119C331.147 282.56 330.816 282.999 330.487 283.445C330.308 283.688 330.13 283.931 329.951 284.174C329.537 284.735 329.122 285.295 328.705 285.854C328.353 286.328 327.999 286.801 327.645 287.273L327.632 287.29C327.493 287.474 327.353 287.658 327.214 287.842C326.466 288.827 325.714 289.809 324.958 290.788C319.54 297.803 313.918 304.645 308.092 311.315C303.561 316.506 298.91 321.584 294.203 326.607C290.82 330.217 287.386 333.781 284.097 337.481C281.769 340.099 279.267 342.846 277.634 345.989C275.882 349.36 275.187 353.417 277.351 356.805C279.415 360.033 283.019 361.518 286.572 362.276C291.201 363.155 295.883 363.705 300.586 363.921C307.346 364.38 314.118 364.652 320.886 364.958C330.478 365.393 340.07 365.851 349.656 366.406C352.446 366.568 355.235 366.737 358.024 366.913C361.28 367.119 364.391 363.834 364.247 360.538C364.21 358.859 363.543 357.259 362.384 356.072C361.225 354.884 359.663 354.2 358.024 354.163V354.163Z"
                fill="#2F2E41"
              />
            </g>
            <g id="twoC">
              <path
                id="Vector_35"
                d="M618.482 354.163C606.975 353.436 595.461 352.851 583.943 352.326C576.182 351.972 568.413 351.682 560.661 351.145C557.941 350.956 555.219 350.733 552.514 350.381C551.804 350.274 551.092 350.154 550.386 350.007C550.49 349.875 550.592 349.742 550.697 349.612C551.254 348.922 551.826 348.245 552.407 347.576C555.477 344.037 558.728 340.662 561.933 337.251C566.451 332.443 570.934 327.601 575.309 322.655C580.996 316.223 586.502 309.629 591.825 302.873C593.331 300.957 594.822 299.029 596.298 297.088C597.33 295.73 598.357 294.368 599.379 293.001C599.764 292.486 600.149 291.97 600.532 291.453C600.71 291.212 600.888 290.971 601.066 290.73C601.241 290.493 602.005 289.467 601.45 290.2C601.778 289.765 602.106 289.331 602.434 288.896C602.655 288.6 602.876 288.304 603.095 288.007C603.598 287.324 604.093 286.634 604.58 285.937C605.457 284.68 606.305 283.402 607.123 282.103C608.672 279.646 610.097 277.109 611.392 274.502C616.223 264.752 619.385 253.973 619.32 242.965C619.36 233.725 616.869 224.658 612.131 216.796C607.54 209.352 600.894 203.473 593.038 199.902C588.466 197.879 583.633 196.544 578.688 195.939C573.874 195.399 569.012 195.513 564.228 196.279C553.246 197.839 542.715 202.644 533.503 208.85C530.567 210.829 527.761 212.99 525.002 215.219C523.836 216.161 523.179 218.283 523.179 219.727C523.191 221.415 523.845 223.032 525.002 224.235C526.171 225.427 527.753 226.098 529.402 226.102C531.032 226.005 532.583 225.347 533.802 224.235C533.93 224.132 534.059 224.028 534.188 223.924C534.576 223.622 534.967 223.322 535.359 223.025C536.188 222.398 537.025 221.784 537.871 221.183C539.547 219.994 541.26 218.861 543.009 217.784C546.023 215.931 549.151 214.278 552.372 212.836C557.03 210.869 561.9 209.474 566.878 208.681C570.567 208.235 574.293 208.213 577.987 208.613C581.245 209.112 584.435 209.998 587.493 211.253C588.891 211.901 590.249 212.634 591.562 213.447C592.369 213.95 593.157 214.483 593.925 215.046C594.033 215.125 594.272 215.309 594.477 215.466C594.672 215.628 594.865 215.792 595.057 215.959C596.457 217.174 597.767 218.495 598.977 219.909C599.262 220.242 599.541 220.58 599.814 220.923C599.855 220.974 599.896 221.027 599.936 221.079C600.464 221.81 600.966 222.559 601.443 223.326C602.414 224.901 603.276 226.545 604.023 228.244C605.239 231.371 606.098 234.631 606.583 237.959C606.973 241.732 606.952 245.537 606.52 249.305C605.757 254.348 604.411 259.281 602.51 263.998C600.297 269.13 597.595 274.026 594.445 278.616C594.005 279.261 593.557 279.902 593.101 280.536C592.888 280.834 592.674 281.129 592.458 281.424C592.374 281.538 592.094 281.914 591.941 282.119C591.605 282.56 591.274 282.999 590.946 283.445C590.767 283.688 590.588 283.931 590.409 284.174C589.995 284.735 589.58 285.295 589.164 285.854C588.811 286.328 588.457 286.801 588.103 287.273L588.09 287.29C587.951 287.474 587.811 287.658 587.672 287.842C586.924 288.827 586.172 289.809 585.416 290.788C579.998 297.803 574.376 304.645 568.55 311.315C564.019 316.506 559.368 321.584 554.661 326.607C551.279 330.217 547.844 333.781 544.555 337.481C542.227 340.1 539.725 342.846 538.092 345.989C536.34 349.36 535.645 353.417 537.81 356.805C539.873 360.033 543.477 361.518 547.03 362.276C551.659 363.156 556.342 363.705 561.044 363.921C567.804 364.38 574.576 364.652 581.344 364.958C590.936 365.393 600.528 365.851 610.115 366.406C612.904 366.568 615.694 366.737 618.483 366.913C621.738 367.119 624.849 363.834 624.705 360.538C624.669 358.859 624.001 357.259 622.842 356.072C621.683 354.884 620.121 354.2 618.482 354.163Z"
                fill="#2F2E41"
              />
            </g>
            <path
              id="twoR"
              d="M748.029 268.498C736.521 267.771 725.007 267.186 713.489 266.661C705.728 266.307 697.959 266.017 690.207 265.48C687.487 265.291 684.765 265.068 682.06 264.716C681.35 264.609 680.638 264.49 679.932 264.342C680.036 264.21 680.138 264.077 680.243 263.947C680.8 263.257 681.372 262.58 681.953 261.911C685.023 258.372 688.274 254.997 691.479 251.587C695.997 246.779 700.48 241.936 704.855 236.99C710.542 230.559 716.048 223.965 721.371 217.208C722.877 215.292 724.368 213.364 725.844 211.423C726.876 210.065 727.903 208.703 728.925 207.337C729.31 206.821 729.695 206.305 730.078 205.788C730.256 205.547 730.434 205.306 730.612 205.065C730.787 204.828 731.551 203.802 730.996 204.535C731.324 204.101 731.652 203.666 731.98 203.231C732.201 202.936 732.422 202.64 732.641 202.343C733.144 201.659 733.639 200.969 734.126 200.272C735.003 199.015 735.851 197.737 736.669 196.438C738.218 193.981 739.643 191.444 740.938 188.837C745.769 179.087 748.931 168.308 748.866 157.3C748.906 148.06 746.415 138.994 741.677 131.131C737.086 123.688 730.44 117.808 722.584 114.237C718.012 112.214 713.179 110.879 708.234 110.274C703.42 109.734 698.558 109.849 693.774 110.614C682.792 112.174 672.261 116.98 663.049 123.186C660.113 125.164 657.307 127.325 654.548 129.554C653.382 130.496 652.725 132.619 652.725 134.062C652.737 135.75 653.391 137.367 654.548 138.57C655.717 139.762 657.299 140.433 658.948 140.437C660.578 140.34 662.129 139.682 663.348 138.57C663.476 138.467 663.605 138.363 663.734 138.259C664.122 137.957 664.513 137.657 664.905 137.36C665.733 136.733 666.571 136.119 667.417 135.519C669.093 134.329 670.806 133.196 672.555 132.119C675.569 130.266 678.697 128.613 681.918 127.172C686.576 125.204 691.446 123.809 696.424 123.016C700.113 122.571 703.839 122.548 707.533 122.949C710.791 123.448 713.981 124.333 717.039 125.588C718.437 126.237 719.795 126.969 721.108 127.783C721.915 128.285 722.703 128.818 723.471 129.382C723.579 129.461 723.818 129.644 724.023 129.801C724.218 129.963 724.411 130.128 724.603 130.294C726.003 131.509 727.313 132.83 728.523 134.244C728.808 134.577 729.087 134.915 729.36 135.258C729.401 135.31 729.442 135.362 729.482 135.414C730.01 136.145 730.512 136.894 730.989 137.661C731.96 139.237 732.822 140.88 733.569 142.58C734.785 145.706 735.644 148.966 736.129 152.294C736.519 156.067 736.498 159.872 736.066 163.64C735.303 168.683 733.957 173.616 732.056 178.333C729.843 183.465 727.141 188.361 723.991 192.951C723.55 193.596 723.103 194.237 722.647 194.872C722.434 195.169 722.22 195.465 722.004 195.759C721.92 195.873 721.64 196.249 721.487 196.454C721.151 196.895 720.82 197.335 720.492 197.78C720.313 198.023 720.134 198.266 719.955 198.509C719.541 199.07 719.126 199.63 718.71 200.19C718.357 200.663 718.003 201.136 717.649 201.608L717.636 201.625C717.497 201.81 717.357 201.994 717.218 202.177C716.47 203.163 715.718 204.144 714.962 205.123C709.544 212.138 703.922 218.981 698.096 225.65C693.565 230.842 688.914 235.919 684.207 240.942C680.824 244.552 677.39 248.116 674.101 251.816C671.773 254.435 669.271 257.181 667.638 260.324C665.886 263.695 665.191 267.752 667.355 271.14C669.419 274.368 673.023 275.853 676.576 276.611C681.205 277.491 685.887 278.041 690.59 278.257C697.35 278.715 704.122 278.987 710.89 279.293C720.482 279.728 730.074 280.187 739.66 280.742C742.45 280.903 745.24 281.072 748.028 281.248C751.284 281.454 754.395 278.169 754.251 274.873C754.215 273.194 753.547 271.594 752.388 270.407C751.229 269.219 749.667 268.536 748.029 268.498V268.498Z"
              fill="#2F2E41"
            />
          </g>
        </svg>
      </section>
      <hr />
    </header>
  );
}

export default HeaderElement;