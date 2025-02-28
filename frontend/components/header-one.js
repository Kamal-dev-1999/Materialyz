import React, { useContext, useEffect, useState } from "react";
import { Logo, Login, MyCart, Logout, Profile, NavLinksData, FooterBottomData } from "@/data";
import Link from "next/link";
import { useRouter } from "next/router";
import { MenuContext } from "@/context/menu-context";

const HeaderOne = () => {
  const router = useRouter();
  const [sticky, setSticky] = useState(false);
  const { menuStatus, updateMenuStatus } = useContext(MenuContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check authentication status
  useEffect(() => {
    const token = localStorage.getItem("access_token");
    setIsLoggedIn(!!token); // If token exists, user is logged in
  }, []);

  const handleScroll = () => {
    setSticky(window.scrollY > 70);
  };

  const handleMenuClick = (e) => {
    e.preventDefault();
    updateMenuStatus(!menuStatus);
  };

  const handleLogin = async (credentials) => {
    try {
      const response = await fetch("http://localhost:8000/auth_materialyz/login/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });
  
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("access_token", data.access_token);
        localStorage.setItem("refresh_token", data.refresh_token);
        window.location.reload(); // Refresh to update UI
      } else {
        console.error("Login failed:", data);
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  const handleLogout = async () => {
    const refreshToken = localStorage.getItem("refresh_token");
  
    if (!refreshToken) {
      console.error("No refresh token found");
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
      localStorage.removeItem("user_role");
      window.location.reload();
      return;
    }
  
    try {
      const response = await fetch("http://localhost:8000/auth_materialyz/logout/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("access_token")}`, // Include the access token
        },
        body: JSON.stringify({ refresh_token: refreshToken }),
      });
  
      if (response.ok) {
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        window.location.reload();
      } else {
        const data = await response.json();
        console.error("Logout failed:", data);
      }
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  const [role, setRole] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedRole = localStorage.getItem("user_role");
      setRole(storedRole);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="header home-page-one">
      <nav
        className={`navbar navbar-default header-navigation ${
          sticky ? "stricky stricky-fixed slideInDown animated" : "stricky slideIn animated"
        }`}
      >
        <div className="thm-container clearfix">
          <div className="navbar-header">
            <Link href="/">
              <a className="navbar-brand">
                <img src={Logo.dark} alt="Awesome Image" />
              </a>
            </Link>
            <span className="mobile-menu__toggler" onClick={handleMenuClick}>
              <i className="fa fa-bars"></i>
            </span>
          </div>

          <div className="collapse show navbar-collapse main-navigation mainmenu" id="main-nav-bar">
            <ul className="nav navbar-nav navigation-box" style={{marginLeft:"260px"}}>
              {NavLinksData.map((links, index) => (
                <li key={index} className={router.pathname === links.url ? "active" : ""}>
                  <Link href={links.url}>
                    <a>{links.name}</a>
                  </Link>
                  {links.subItems && (
                    <ul className="sub-menu">
                      {links.subItems.map((subLinks, index) => (
                        <li key={index}>
                          <Link href={subLinks.url}>
                            <a>{subLinks.name}</a>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>

            {isLoggedIn ? (
              <>
              {/* <button onClick={handleLogout} style={{ marginLeft: "100px", fontWeight: "bold", color: "#333" }}>
                Logout
              </button> */}
                <Link href={role === "buyer" ? "/buyer-profile" : "/seller-profile"}>
                  <a className="navbar-brand1">
                    <img src={Profile.dark} alt="Profile" style={{ width: "45px", height: "auto", marginLeft: "100px" }} />
                  </a>
                </Link>
                <Link href="/">
                  <a className="navbar-brand1" onClick={handleLogout}>
                    <img src={Logout.dark} alt="Logout" style={{ width: "66px", height: "auto", marginLeft: "10px" }} />
                  </a>
                </Link>
              </>
            ) : (
              <>
                <Link href="/login-testing">
                  <a className="navbar-brand1">
                    <img src={Login.dark} alt="Login" style={{ width: "50px", height: "auto", marginLeft: "100px" }} />
                  </a>
                </Link>
                <Link href="/">
                  <a className="navbar-brand1">
                    <img src={MyCart.dark} alt="Cart" style={{ width: "56px", height: "auto", marginLeft: "10px" }} />
                  </a>
                </Link>
              </>
            )}

          </div>

          <div className="right-side-box">
            <div className="social">
              {FooterBottomData.social.map(({ icon, url }, index) => (
                <a key={index} href={url} className={`${icon} hvr-pulse`}></a>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default HeaderOne;
