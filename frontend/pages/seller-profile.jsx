import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import {
  FaSearch,
  FaBell,
  FaUserCircle,
  FaStar,
  FaCheckCircle,
  FaTachometerAlt,
  FaFileAlt,
  FaFileInvoice,
  FaShoppingCart,
  FaUsers,
  FaQuestionCircle,
  FaCog,
  FaSignOutAlt,
  FaFolderOpen,
  FaExclamationCircle,
  FaRegCircle
} from "react-icons/fa";

const SellerProfile = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [loadingProfile, setLoadingProfile] = useState(true);
  const [profileData, setProfileData] = useState(null);
  const [errorProfile, setErrorProfile] = useState("");
  
  // New state to store the search query
  const [searchQuery, setSearchQuery] = useState("");
  // New state to toggle the account menu dropdown
  const [showAccountMenu, setShowAccountMenu] = useState(false);

  // Helper to check if a card’s title matches the search query
  const shouldDisplayCard = (cardTitle) => {
    return searchQuery === "" || cardTitle.toLowerCase().includes(searchQuery.toLowerCase());
  };

  // Check if the seller is logged in
  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("access_token");
      const userRole = localStorage.getItem("user_role");

      // If no token or user_role is not "seller", redirect to login
      if (!token || !userRole || userRole.toLowerCase() !== "seller") {
        router.push("/login-testing");
      } else {
        setLoading(false);
      }
    }
  }, [router]);

  // Fetch profile details from backend
  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("access_token");
      axios
        .get("http://localhost:8000/auth_materialyz/profile/", {
          headers: { Authorization: `Bearer ${token}` }
        })
        .then((response) => {
          setProfileData(response.data);
          setLoadingProfile(false);
        })
        .catch((error) => {
          console.error("Error fetching profile:", error);
          setErrorProfile("Failed to load profile data");
          setLoadingProfile(false);
        });
    }
  }, []);

  // Function to handle logout: clear tokens and redirect to home page
  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("user_role");
    router.push("/");
  };

  if (loading || loadingProfile) return <p>Loading profile...</p>;
  if (errorProfile) return <p>{errorProfile}</p>;

  // Destructure user and profile from the fetched data
  const { user, profile } = profileData;

  // Use a fallback image if profile_picture is not provided
  const profilePicture = profile.profile_picture || "https://via.placeholder.com/80";

  return (
    <div style={styles.container}>
      <link
        href="https://fonts.googleapis.com/css2?family=Core+Sans+C:wght@55&display=swap"
        rel="stylesheet"
      />
      {/* LEFT SIDEBAR */}
      <aside style={styles.sidebar}>
        {/* Logo / Brand */}
        <div style={styles.logoBox}>
          <img
            src={profilePicture}
            alt="materialyz.com"
            style={styles.logoImg}
          />
        </div>
        {/* Navigation */}
        <nav style={styles.nav}>
          <div style={styles.navItem}>
            <a href="/dashboard">
              <FaTachometerAlt style={styles.navIcon} />
            </a>
            <p style={styles.navLabel}>Dashboard</p>
          </div>
          <div style={styles.navItem}>
            <a href="/dashboard">
              <FaFileAlt style={styles.navIcon} />
            </a>
            <p style={styles.navLabel}>RFQs</p>
          </div>
          <div style={styles.navItem}>
            <a href="/dashboard">
              <FaFileInvoice style={styles.navIcon} />
            </a>
            <p style={styles.navLabel}>Quotes</p>
          </div>
          <div style={styles.navItem}>
            <a href="/dashboard">
              <FaShoppingCart style={styles.navIcon} />
            </a>
            <p style={styles.navLabel}>Orders</p>
          </div>
          <div style={styles.navItem}>
            <a href="/dashboard">
              <FaUsers style={styles.navIcon} />
            </a>
            <p style={styles.navLabel}>Customers</p>
          </div>
          <div style={styles.navItem}>
            <a href="/dashboard">
              <FaQuestionCircle style={styles.navIcon} />
            </a>
            <p style={styles.navLabel}>Help</p>
          </div>
          <div style={styles.navItem}>
            <a href="/dashboard">
              <FaCog style={styles.navIcon} />
            </a>
            <p style={styles.navLabel}>Settings</p>
          </div>
          <div style={styles.navItem}>
            <a href="/dashboard">
              <FaSignOutAlt style={styles.navIcon} />
            </a>
            <p style={styles.navLabel}>Logout</p>
          </div>
        </nav>
      </aside>

      {/* MAIN SECTION */}
      <div style={styles.main}>
        {/* TOP BAR */}
        <header style={styles.topBar}>
          {/* Left Section: Brand + Page Title */}
          <div style={styles.leftSection}>
            <img
              src="https://materialyz.com/cdn/shop/files/Materialyze_logo_tryia_type_-_Copy_ac7480b1-19df-4ad9-9b1c-b4202f71e222.png?v=1716870964&width=400"
              alt="materialyz.com"
              style={styles.brandLogo}
            />
            <span style={styles.pageTitle}>Seller Profile</span>
          </div>
          {/* Center: Search Bar */}
          <div style={styles.searchContainer}>
            <FaSearch style={styles.searchIcon} />
            <input
              type="text"
              placeholder="Search..."
              style={styles.searchInput}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          {/* Right: Icons */}
          <div style={styles.iconGroup}>
            <FaBell style={styles.iconStyle} />
            <div style={{ position: "relative" }}>
              <FaUserCircle
                style={styles.iconStyle}
                onClick={() => setShowAccountMenu(!showAccountMenu)}
              />
              {showAccountMenu && (
                <div style={styles.accountMenu}>
                  <button onClick={handleLogout} style={styles.logoutButton}>
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* CONTENT AREA */}
        <div style={styles.content}>
          {/* Company + Stats (always visible) */}
          <div style={styles.companyCard}>
            <div style={styles.topRow}>
              {/* Left Side: Logo + Basic Info */}
              <div style={styles.leftSide}>
                <img
                  src={profilePicture}
                  alt="Company Logo"
                  style={styles.companyLogo}
                />
                <div style={styles.companyDetails}>
                  <div style={styles.companyHeader}>
                    <h3 style={styles.companyName}>{profile.compnay_name}</h3>
                  </div>
                  <p style={{ fontSize: "15px" }}>
                    <strong>Phone:</strong> {profile.phone}
                  </p>
                  <p style={{ fontSize: "15px" }}>
                    <strong>Address:</strong> {profile.address}
                  </p>
                  <p style={{ fontSize: "15px" }}>
                    <strong>GST Number:</strong> {profile.gst_number}
                  </p>
                </div>
              </div>
              {/* Right Side: Owner Info */}
              <div style={styles.rightSide}>
                <div style={styles.rating}>
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} color="gold" />
                  ))}
                </div>
                <p style={{ fontSize: "15px" }}>
                  <strong>Owner Name:</strong> {user.username}
                </p>
                <p style={{ fontSize: "15px" }}>
                  <strong>Owner Email:</strong> {user.email}
                </p>
                <p style={{ fontSize: "15px" }}>
                  <strong>Verified:</strong> {user.is_verified ? "Yes" : "No"}
                </p>
              </div>
            </div>
            {/* Stats Row (static for now) */}
            <div style={styles.statsRow}>
              {[
                { label: "Total RFQs", icon: <FaFileAlt style={styles.statsIcon} /> },
                { label: "Open RFQs", icon: <FaFolderOpen style={styles.statsIcon} /> },
                { label: "Accepted RFQs", icon: <FaCheckCircle style={styles.statsIcon} /> },
                { label: "Live Orders", icon: <FaShoppingCart style={styles.statsIcon} /> }
              ].map((item, index, arr) => (
                <div
                  key={item.label}
                  style={{
                    ...styles.statsBox,
                    marginRight: index < arr.length - 1 ? "40px" : 0
                  }}
                >
                  <div style={{ marginRight: "40px" }}>{item.icon}</div>
                  <div style={styles.statsTextContainer}>
                    <p style={styles.statsNumber}>0</p>
                    <p style={styles.statsLabel}>{item.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cards Section: Only show cards that match the search query */}
          <div style={styles.cardsOrdersGrid}>
            {/* Live Orders Card */}
            {shouldDisplayCard("live orders") && (
              <div style={styles.cardOrders}>
                <div style={styles.cardHeader}>
                  <h3 style={styles.cardTitle}>Live Orders</h3>
                  <p style={styles.viewAll}>View All</p>
                </div>
                <div style={styles.cardBody}>
                  <p style={styles.noOrdersText}>No Live Orders Found</p>
                  <img
                    src="https://www.biznurture.com/images/not_eligible.png"
                    alt="Live Orders"
                    style={styles.cardImage}
                  />
                </div>
              </div>
            )}

            {/* Profile Card */}
            {shouldDisplayCard("profile") && (
              <div style={styles.profileCard}>
                <h3 style={styles.profileCardTitle}>Profile</h3>
                <div style={styles.profileProgressContainer}>
                  <svg width="100" height="100">
                    <circle cx="50" cy="50" r="40" style={styles.progressBg} />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      style={styles.progressBar}
                      strokeDasharray="251.2"
                      strokeDashoffset="188.4"
                    />
                  </svg>
                  <div style={styles.profileProgressText}>
                    <p>Status</p>
                    <p style={styles.profileStatusNumber}>1 of 4</p>
                  </div>
                </div>
                <ul style={styles.profileList}>
                  <li>
                    <FaCheckCircle style={{ ...styles.profileIcon, ...styles.profileIconCheck }} /> Company Details Added
                  </li>
                  <li>
                    <FaExclamationCircle style={{ ...styles.profileIcon, ...styles.profileIconWarning }} /> Certifications Pending
                  </li>
                  <li>
                    <FaRegCircle style={{ ...styles.profileIcon, ...styles.profileIconPending }} /> RFQs Pending
                  </li>
                  <li>
                    <FaRegCircle style={{ ...styles.profileIcon, ...styles.profileIconPending }} /> Industries & Products Pending
                  </li>
                </ul>
                <a href="/dashboard" style={styles.profilePrimaryButton}>
                  Complete your Profile
                </a>
              </div>
            )}
          </div>

          <div style={styles.cardsGrid}>
            {/* Open RFQs Card */}
            {shouldDisplayCard("open rfqs") && (
              <div style={styles.card}>
                <div style={styles.cardHeader}>
                  <h3 style={styles.cardTitle}>Open RFQs</h3>
                  <p style={styles.viewAll}>View All</p>
                </div>
                <div style={styles.cardBody}>
                  <p style={styles.noOrdersText}>No Open RFQs Found</p>
                  <img
                    src="https://pwa-cdn.freecharge.in/pwa-static/pwa/images/blogs/no-post-found.svg"
                    alt="Open RFQs"
                    style={styles.cardImage}
                  />
                </div>
              </div>
            )}

            {/* Manage Buyers Card */}
            {shouldDisplayCard("manage your buyers") && (
              <div style={styles.manageBuyersCard}>
                <div style={styles.manageBuyersText}>
                  <h3 style={styles.cardTitle}>Manage your Buyers</h3>
                  <ul style={styles.list}>
                    <li style={styles.listItem}>✅ Onboard buyers</li>
                    <li style={styles.listItem}>✅ Share quotes with buyers</li>
                    <li style={styles.listItem}>✅ View buyer reports</li>
                  </ul>
                  <a href="/dashboard" style={styles.buyerButton}>
                    Go to buyer library
                  </a>
                </div>
                <img
                  src="https://webhead.at/wp-content/uploads/2024/02/customer-relationship-management-animate.svg"
                  alt="Manage Buyers"
                  style={styles.manageBuyersImage}
                />
              </div>
            )}

            {/* Manage Capabilities Card */}
            {shouldDisplayCard("manage your capabilities") && (
              <div style={styles.manageCapabilityCard}>
                <img
                  src="https://ultravux.com/images/Onemage.svg"
                  alt="Manage your Capability"
                  style={styles.manageCapabilityImage}
                />
                <div style={styles.manageCapabilityText}>
                  <h3 style={styles.cardCapabilityTitle}>Manage your Capabilities</h3>
                  <p style={styles.noOrdersText}>Add your Material and Finishing Capabilities</p>
                  <a href="/dashboard" style={styles.capabilityButton}>
                    Go to Capabilities
                  </a>
                </div>
              </div>
            )}

            {/* Recent Activities Card */}
            {shouldDisplayCard("recent activities") && (
              <div style={styles.card}>
                <h3 style={styles.cardTitle}>Recent Activities</h3>
                <div style={styles.cardBody}>
                  <p style={styles.noOrdersText}>No Recent Activities</p>
                  <img
                    src="https://img.freepik.com/premium-vector/folder-concept-no-data-corrupted-data-with-characters-confused-with-missing-missing-files_675567-3308.jpg"
                    alt="Recent Activities"
                    style={styles.cardImage}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

/* INLINE STYLES with Poppins font, matching your desired layout and icons */
const styles = {
  container: {
    display: "flex",
    flexDirection:"row",
    minHeight: "100vh",
    background: "#f5f5f5",
    fontFamily: "Poppins, sans-serif"
  },
  /* SIDEBAR */
  sidebar: {
    width: "60px",
    background: "#f7941d",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "10px 0",
    position: "fixed",
    height: "100vh",
    flex: 1,
  },
  logoBox: {
    marginBottom: "20px"
  },
  logoImg: {
    width: "40px",
    height: "40px",
    objectFit: "contain",
    borderRadius:"50%"
  },
  nav: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    flex: 1,
    width: "100%",
    // flexGrow: 1,
  },
  navItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // padding: "1px 0",
    width: "100%",
    cursor: "pointer"
  },
  navIcon: {
    width: "24px",
    height: "16px",
    marginBottom: "5px",
    color:"white"
  },
  navLabel: {
    fontSize: "10px",
    textAlign: "center"
  },

  /* MAIN SECTION */
  main: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    marginLeft: "50px", // Push right of sidebar
    // marginTop: "60px", // Push below header
    height: "100vh",
    // height: "calc(100vh - 60px)", // Full height minus header
    overflowY: "auto", // Allow scrolling
    padding: "20px",
    backgroundColor: "#f5f5f5",
  },
  topBar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    background: "#fff",
    height: "80px",
    padding: "0 20px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    left: "250px",
    // width: "calc(100% - 50px)",
    zIndex: 1000,
  },
  pageTitle: {
    margin: 0,
    fontSize: "18px",
    color: "#333",
    fontWeight:"bold"
  },
  topBarActions: {
    display: "flex",
    alignItems: "center",
    gap: "15px"
  },
  actionIcon: {
    fontSize: "18px",
    color: "#999",
    cursor: "pointer"
  },

  content: {
    flex: 1,
    padding: "20px",
    overflowY: "auto"
  },

  /* COMPANY + STATS */
    companyCard: {
    background: "#fff",
    borderRadius: "10px",
    padding: "20px",
    marginBottom: "20px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column"
  },

  topRow: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "20px"
  },

  leftSide: {
    display: "flex",
    alignItems: "center",
    gap: "20px"
  },

  companyLogo: {
    width: "160px",
    height: "160px",
    objectFit: "cover",
    borderRadius: "50%"
  },

  companyDetails: {
    display: "flex",
    flexDirection: "column",
    gap: "5px"
  },

  companyHeader: {
    display: "flex",
    alignItems: "center",
    gap: "10px", // space between name & star rating
    marginBottom: "5px"
  },

  companyName: {
    margin: 0,
    fontSize: "26px",
    color: "orangered",
    fontWeight:"800"
  },

  rating: {
    display: "flex",
    marginRight:"250px"
  },

  rightSide: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: "5px",
    // textAlign: "right",
    minWidth: "200px"
  },

  statsNumber: {
    margin: 0,
    fontSize: "16px",
    fontWeight: "bold",
    color: "#333"
  },

  statsLabel: {
    margin: 0,
    fontSize: "14px",
    color: "#555"
  },


  /* The top row with left side (logo & details) and right side (owner info) */
  // topBar: {
  //   display: "flex",
  //   alignItems: "center",
  //   justifyContent: "space-between",
  //   background: "#fff",
  //   height: "60px",
  //   padding: "0 20px",
  //   boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  //   fontFamily: "Poppins, sans-serif" // or your preferred font
  // },
  leftSection: {
    display: "flex",
    alignItems: "center",
    gap: "10px"
  },
  brandLogo: {
    width: "280px",
    height: "40px",
    objectFit: "contain"
  },
  brandName: {
    margin: 0,
    fontSize: "20px",
    color: "#f7941d"
  },
  pageTitle: {
    fontSize: "16px",
    color: "	#696969",
    marginLeft: "10px",
    fontWeight: "700"
  },
  searchContainer: {
    display: "flex",
    alignItems: "center",
    background: "#e9eff6",
    borderRadius: "30px",
    padding: "5px 15px",
    flex: 1,             // makes the search bar expand
    margin: "0 20px",
    maxWidth: "500px"    // limit max width if you want
  },
  searchIcon: {
    fontSize: "16px",
    color: "#9ca3af"
  },
  searchInput: {
    border: "none",
    outline: "none",
    background: "transparent",
    marginLeft: "8px",
    width: "100%",
    fontSize: "14px",
    color: "#333"
  },
  iconGroup: {
    display: "flex",
    alignItems: "center",
    gap: "20px"
  },
  iconStyle: {
    fontSize: "18px",
    color: "#999",
    cursor: "pointer"
  },
  leftSide: {
    display: "flex",
    alignItems: "center",
    gap: "20px"
  },
  companyDetails: {
    display: "flex",
    flexDirection: "column",
    gap: "5px"
  },
  companyHeader: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "5px"
  },
  // companyName: {
  //   margin: 0,
  //   fontSize: "16px",
  //   color: "#f7941d"
  // },
  // rating: {
  //   display: "flex"
  // },
  // companyLogo: {
  //   width: "80px",
  //   height: "80px",
  //   objectFit: "cover",
  //   borderRadius: "8px"
  // },

  /* Pink Stats Row */
  statsRow: {
    display: "flex",
    // gap: "10px",
    alignItems: "center",
    justifyContent: "center",
  },
  statsBox: {
    background: "#FFE9F0",
    borderRadius: "12px",
    padding: "10px 20px",
    display: "flex",
    alignItems: "center",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    minWidth: "250px",
  },
  statsIconContainer: {
    width: "40px",
    height: "40px",
    background: "#FFD4E0",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: "10px"
  },
  statsIcon: {
    width: "20px",
    height: "20px",
  },
  statsTextContainer: {
    display: "flex",
    flexDirection: "column",
  },
  statsNumber: {
    margin: 0,
    fontSize: "16px",
    fontWeight: "bold",
    color: "#333"
  },
  statsLabel: {
    margin: 0,
    fontSize: "14px",
    color: "#555"
  },

  /* GRID OF CARDS */
  cardsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "20px"
  },
  // card: {
  //   background: "#fff",
  //   borderRadius: "10px",
  //   padding: "20px",
  //   boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
  //   width: "100%",
  //   maxWidth: "600px",
  // },
  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "10px",
  },
  cardTitle: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#F57224", // Orange color
  },
  viewAll: {
    fontSize: "14px",
    color: "#F57224",
    cursor: "pointer",
    fontWeight: "bold",
  },
  cardBody: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  // cardImage: {
  //   width: "200px",
  //   marginBottom: "10px",
  // },
  noOrdersText: {
    fontSize: "14px",
    color: "#666",
  },

  // Live Orders
  cardOrders: {
    background: "#fff",
    borderRadius: "10px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    width:"1000px"
  },
  cardsOrdersGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 2fr)",
    gap: "20px",
    marginBottom:"25px"
  },

  card: {
    background: "#fff",
    borderRadius: "10px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    padding: "20px",
    display: "flex",
    flexDirection: "column"
  },
  // profileHeader: {
  //   display: "flex",
  //   alignItems: "center",
  //   justifyContent: "space-between",
  //   marginBottom: "10px"
  // },
  // profileStatus: {
  //   width: "50px",
  //   height: "50px",
  //   borderRadius: "50%",
  //   background: "#f7941d",
  //   display: "flex",
  //   alignItems: "center",
  //   justifyContent: "center"
  // },
  // profileStatusText: {
  //   color: "#fff",
  //   fontSize: "12px"
  // },
  cardTitle: {
    margin: 0,
    fontSize: "20px",
    // color: "#333",
    marginBottom: "10px",
    fontWeight: "bold",
    color: "#F57224", // Orange color
  },
  cardBody: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
    textAlign: "center"
  },
  cardImage: {
    width: "200px",
    marginTop: "-10px"
  },
  // primaryButton: {
  //   background: "#f7941d",
  //   color: "#fff",
  //   border: "none",
  //   borderRadius: "5px",
  //   padding: "10px",
  //   cursor: "pointer",
  //   marginTop: "10px",
  //   width: "100%"
  // },

  // Profile Section
  profileCard: {
    backgroundColor: "#fff",
    borderRadius: "10px",
    padding: "20px",
    // textAlign: "center",        
    fontFamily: "Arial, sans-serif",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    width:"370px",
    fontSize:"14px"
  },
  profileCardTitle: {
    color: "#F97316",
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  profileProgressContainer: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "20px",
  },
  progressBg: {
    fill: "none",
    stroke: "#FEE2E2",
    strokeWidth: "8",
  },
  progressBar: {
    fill: "none",
    stroke: "#F97316",
    strokeWidth: "8",
    strokeDasharray: "251.2",
    strokeLinecap: "round",
    transition: "stroke-dashoffset 0.6s ease-in-out",
  },
  statusText: {
    fill: "#333",
    fontSize: "12px",
    fontWeight: "bold",
  },
  progressText: {
    fill: "#333",
    fontSize: "14px",
    fontWeight: "bold",
  },
  profileList: {
    listStyle: "none",
    padding: 0,
    marginBottom: "20px",
    // textAlign: "center",
    marginLeft:"80px"
  },
  profileIcon: {
    fontSize: "16px",
    marginRight: "10px",
    color: "#C4C4C4",
    textAlign: "center",
  },
  profilePrimaryButton: {
    background: "#f57224",
    color: "#fff",
    padding: "10px 15px",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
    marginTop: "10px",
    width: "200px",
    fontWeight:"bold",
    display: "block",  // Ensures block-level alignment
    margin: "10px auto 0",  // Centers the button horizontally
  },

  // Manage your Buyers Section
  manageBuyersCard: {
    display: "flex",
    alignItems: "center",
    background: "#fff",
    borderRadius: "10px",
    padding: "20px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
    textAlign: "left",
    gap: "20px",
  },
  manageBuyersText: {
    flex: 1,
  },
  cardTitle: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#f57224",
    marginBottom: "10px",
  },
  list: {
    listStyle: "none",
    padding: "0",
    margin: "0",
    color: "#333",
  },
  listItem: {
    fontSize: "14px",
    marginBottom: "5px",
  },
  buyerButton: {
    background: "#f57224",
    color: "#fff",
    padding: "10px 15px",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
    marginTop: "10px",
    fontWeight:"bold",
    display: "block",
    width:"180px"
  },
  manageBuyersImage: {
    width: "50%",
  },

  // Manage your Capabilities
  manageCapabilityCard: {
    display: "flex",
    alignItems: "center",
    background: "#fff",
    borderRadius: "10px",
    padding: "20px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
    textAlign: "left",
    gap: "70px",
  },
  manageCapabilityText: {
    flex: 1,
  },
  cardCapabilityTitle: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#f57224",
    marginBottom: "10px",
  },
  listCapability: {
    listStyle: "none",
    padding: "0",
    margin: "0",
    color: "#333",
  },
  listCapabilityItem: {
    fontSize: "14px",
    marginBottom: "5px",
  },
  capabilityButton: {
    background: "#f57224",
    color: "#fff",
    padding: "10px 15px",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
    marginTop: "10px",
    fontWeight:"bold",
    display:"block",
    width:"170px"
  },
  manageCapabilityImage: {
    width: "40%",
  },

  accountMenu: {
    position: "absolute",
    top: "40px",
    right: 0,
    background: "#fff",
    border: "1px solid #ccc",
    borderRadius: "4px",
    padding: "5px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
    zIndex: 1001
  },
  logoutButton: {
    background: "transparent",
    border: "none",
    color: "#333",
    cursor: "pointer",
    padding: "5px 10px",
    width: "100%",
    textAlign: "left"
  }
  
};

export default SellerProfile;
