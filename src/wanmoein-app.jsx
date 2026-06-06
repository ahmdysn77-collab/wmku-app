import { useState, useEffect } from "react";

const PROXY = "https://wmku-data-production.up.railway.app";
const CONTACT_WA = "https://wa.me/6281216196944";
const CONTACT_IG = "https://instagram.com/wanmoeinkopi";
const CONTACT_TT = "https://tiktok.com/@wanmoeinkopi";
const OUTLET_ADDRESS = "Jl. Banowati Blok F No. 96, Bekasi";
const LOGO_URL = "https://raw.githubusercontent.com/ahmdysn77-collab/wmku-data/main/logo%20wm.jpeg";

const tabs = ["Beranda", "Menu", "Reward", "Promo"];
const tabIcons = [
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8h1a4 4 0 010 8h-1"/><path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>,
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20 12V22H4V12"/><path d="M22 7H2v5h20V7z"/><path d="M12 22V7"/><path d="M12 7H7.5a2.5 2.5 0 010-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 000-5C13 2 12 7 12 7z"/></svg>,
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2z"/><path d="M8.56 2.69A4 4 0 0112 1a4 4 0 013.44 1.69"/><path d="M8 10h8"/><path d="M8 14h5"/></svg>
];

function useRealTime() {
  const [time, setTime] = useState(new Date());
  useEffect(() => { const t = setInterval(() => setTime(new Date()), 1000); return () => clearInterval(t); }, []);
  return time.toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit", hour12: false });
}

const S = {
  screen: { fontFamily: "'Inter','SF Pro Display',-apple-system,sans-serif", background: "#0A0A0A", minHeight: "100dvh", display: "flex", justifyContent: "center", alignItems: "flex-start" },
  phone: { width: "100%", maxWidth: "430px", minHeight: "100dvh", background: "#FAFAF8", display: "flex", flexDirection: "column", position: "relative" },
  statusBar: { background: "#1A0F00", padding: "14px 20px 10px", display: "flex", justifyContent: "space-between", alignItems: "center", position: "sticky", top: 0, zIndex: 20 },
  input: { width: "100%", background: "#F5F5F3", border: "1.5px solid #E5E5E0", borderRadius: "14px", padding: "16px", fontSize: "16px", fontFamily: "inherit", color: "#1A1A1A", outline: "none", boxSizing: "border-box", WebkitAppearance: "none" },
  btnPrimary: { width: "100%", background: "#1A0F00", color: "#F5ECD7", border: "none", borderRadius: "14px", padding: "18px", fontSize: "16px", fontFamily: "inherit", fontWeight: "500", cursor: "pointer", WebkitTapHighlightColor: "transparent" },
  btnGhost: { background: "none", border: "none", color: "#C8860A", fontFamily: "inherit", fontSize: "14px", cursor: "pointer", padding: "8px 0", WebkitTapHighlightColor: "transparent" },
  label: { fontSize: "11px", letterSpacing: "1px", color: "#888", textTransform: "uppercase", marginBottom: "8px", display: "block", fontWeight: "500" },
  errorBox: { background: "#FFF5F5", border: "1px solid #FFD0D0", borderRadius: "12px", padding: "14px 16px", fontSize: "14px", color: "#CC3333", marginBottom: "16px" },
};

function Logo({ height = 28, style = {} }) {
  const [err, setErr] = useState(false);
  if (err) return <span style={{ color: "#C8860A", fontSize: "11px", fontWeight: "700", letterSpacing: "1.5px", ...style }}>WANMOEIN KOPI</span>;
  return <img src={LOGO_URL} alt="WanMoein Kopi" onError={() => setErr(true)} style={{ height, width: "auto", objectFit: "contain", borderRadius: "50%", ...style }} />;
}

function StatusBar({ onMenuOpen }) {
  const time = useRealTime();
  return (
    <div style={S.statusBar}>
      <span style={{ color: "#F5ECD7", fontSize: "13px", fontWeight: "600", fontVariantNumeric: "tabular-nums" }}>{time}</span>
      <Logo height={28} />
      <button onClick={onMenuOpen} style={{ background: "none", border: "none", cursor: "pointer", padding: "4px", WebkitTapHighlightColor: "transparent", display: "flex", gap: "3px", alignItems: "center" }}>
        {[0,1,2].map(i => <span key={i} style={{ width: 4, height: 4, borderRadius: "50%", background: "#C8860A", display: "block" }} />)}
      </button>
    </div>
  );
}

function DropdownMenu({ user, onLogout, onClose }) {
  return (
    <>
      <div onClick={onClose} style={{ position: "fixed", inset: 0, zIndex: 30, background: "rgba(0,0,0,0.3)" }} />
      <div style={{ position: "fixed", top: "58px", right: "max(calc(50% - 215px), 8px)", width: "220px", background: "#FFF", borderRadius: "16px", boxShadow: "0 8px 32px rgba(0,0,0,0.18)", zIndex: 40, overflow: "hidden", border: "1px solid #EBEBEB" }}>
        <div style={{ padding: "16px 18px", borderBottom: "1px solid #F0F0F0" }}>
          <p style={{ margin: "0 0 2px", fontSize: "11px", color: "#999", letterSpacing: "1px", textTransform: "uppercase" }}>Profil</p>
          <p style={{ margin: "0 0 2px", fontSize: "15px", color: "#1A1A1A", fontWeight: "500" }}>{user.name}</p>
          <p style={{ margin: 0, fontSize: "13px", color: "#888" }}>{user.phone}</p>
        </div>
        {[
          { href: CONTACT_WA, icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#25D366" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 12a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1.18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>, label: "WhatsApp" },
          { href: CONTACT_IG, icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#E1306C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>, label: "Instagram" },
          { href: CONTACT_TT, icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="#000"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.28 6.28 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.78a4.85 4.85 0 01-1.01-.09z"/></svg>, label: "TikTok" },
        ].map(({ href, icon, label }) => (
          <a key={label} href={href} target="_blank" rel="noreferrer" style={{ display: "flex", alignItems: "center", gap: "12px", padding: "13px 18px", textDecoration: "none", borderBottom: "1px solid #F0F0F0" }}>
            {icon}<span style={{ fontSize: "14px", color: "#1A1A1A" }}>{label}</span>
          </a>
        ))}
        <button onClick={() => { onClose(); onLogout(); }} style={{ width: "100%", display: "flex", alignItems: "center", gap: "12px", padding: "13px 18px", background: "none", border: "none", cursor: "pointer", WebkitTapHighlightColor: "transparent" }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#CC3333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
          <span style={{ fontSize: "14px", color: "#CC3333" }}>Keluar</span>
        </button>
      </div>
    </>
  );
}

function SplashScreen({ onDone }) {
  return (
    <div style={{ ...S.screen, alignItems: "center" }}>
      <div style={{ ...S.phone, justifyContent: "center", alignItems: "center", background: "#1A0F00" }}>
        <div style={{ textAlign: "center", padding: "48px 40px" }}>
          <Logo height={100} style={{ borderRadius: "50%", marginBottom: "28px" }} />
          <p style={{ color: "rgba(200,134,10,0.7)", fontSize: "12px", letterSpacing: "3px", margin: "0 0 64px" }}>LOYALTY APP</p>
          <button onClick={onDone} style={{ ...S.btnPrimary, background: "rgba(200,134,10,0.15)", border: "1px solid rgba(200,134,10,0.4)", color: "#C8860A", width: "auto", padding: "16px 48px", borderRadius: "40px", fontSize: "15px", fontWeight: "400" }}>Masuk</button>
        </div>
      </div>
    </div>
  );
}

function LoginScreen({ onLogin }) {
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleLogin() {
    setError("");
    if (phone.length < 8) { setError("Nomor HP tidak valid."); return; }
    setLoading(true);
    try {
      const fullPhone = "62" + phone.replace(/^0+/, "");
      const res = await fetch(`${PROXY}/api/customers`);
      const data = await res.json();
      const customers = data.data?.customers || [];
      const found = customers.find(c => {
        const cp = (c.phone || "").replace(/\D/g, "");
        return cp === fullPhone || cp.endsWith(phone.replace(/^0+/, ""));
      });
      if (!found) { setError("Nomor belum terdaftar. Silakan daftar di kasir."); setLoading(false); return; }
      const pts = found.loyalty?.point_balance || 0;
      onLogin({ name: found.name && found.name !== "-" ? found.name : "Member", phone: found.phone, points: pts, mokaId: found.id });
    } catch (e) { setError("Gagal terhubung. Coba lagi."); }
    setLoading(false);
  }

  return (
    <div style={S.screen}>
      <div style={S.phone}>
        <div style={{ background: "#1A0F00", padding: "60px 24px 36px" }}>
          <Logo height={36} style={{ marginBottom: "20px" }} />
          <h2 style={{ color: "#F5ECD7", fontSize: "28px", margin: 0, fontWeight: "300" }}>Selamat datang</h2>
        </div>
        <div style={{ flex: 1, overflowY: "auto", padding: "32px 24px", WebkitOverflowScrolling: "touch" }}>
          {error && <div style={S.errorBox}>{error}</div>}
          <label style={S.label}>Nomor HP</label>
          <div style={{ position: "relative", marginBottom: "24px" }}>
            <span style={{ position: "absolute", left: "16px", top: "50%", transform: "translateY(-50%)", fontSize: "14px", color: "#888", userSelect: "none" }}>+62</span>
            <input style={{ ...S.input, paddingLeft: "56px" }} placeholder="81xxxxxxxxx" value={phone} onChange={e => setPhone(e.target.value.replace(/\D/g, "").replace(/^0+/, ""))} maxLength={12} type="tel" inputMode="numeric" />
          </div>
          <button style={S.btnPrimary} onClick={handleLogin} disabled={loading}>{loading ? "Memeriksa..." : "Masuk"}</button>
          <p style={{ textAlign: "center", fontSize: "13px", color: "#888", marginTop: "24px", lineHeight: 1.7 }}>
            Belum terdaftar?<br />
            <span style={{ color: "#1A1A1A", fontWeight: "500" }}>Daftar di kasir WanMoein Kopi</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function MainApp({ user, onLogout }) {
  const [activeTab, setActiveTab] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mokaMenu, setMokaMenu] = useState({});
  const [loadingMenu, setLoadingMenu] = useState(false);
  const [mokaRewards, setMokaRewards] = useState([]);
  const [loyaltyRule, setLoyaltyRule] = useState(null);
  const [redeemed, setRedeemed] = useState([]);
  const [promos, setPromos] = useState([]);
  const [loadingPromo, setLoadingPromo] = useState(false);

  useEffect(() => {
    setLoadingMenu(true);
    fetch(`${PROXY}/api/menu`).then(r => r.json()).then(data => {
      const items = (data.data?.items || []).filter(i => !i.is_deleted);
      const grouped = {};
      items.forEach(item => {
        const cat = item.category?.name || "Lainnya";
        if (!grouped[cat]) grouped[cat] = [];
        grouped[cat].push(item);
      });
      setMokaMenu(grouped);
    }).catch(() => {}).finally(() => setLoadingMenu(false));
  }, []);

  useEffect(() => {
    fetch(`${PROXY}/api/loyalty`).then(r => r.json()).then(data => {
      const programs = data.data || [];
      const program = Array.isArray(programs) ? programs[0] : programs;
      if (program) { setLoyaltyRule(program.earning_rules?.[0] || null); setMokaRewards(program.rewards || []); }
    }).catch(() => {});
  }, []);

  useEffect(() => {
    if (activeTab === 3) {
      setLoadingPromo(true);
      fetch(`${PROXY}/api/promo`).then(r => r.json()).then(data => setPromos(data.data || [])).catch(() => {}).finally(() => setLoadingPromo(false));
    }
  }, [activeTab]);

  function formatDate(str) {
    if (!str) return "";
    try { return new Date(str).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" }); } catch { return str; }
  }

  return (
    <div style={S.screen}>
      <div style={S.phone}>
        <StatusBar onMenuOpen={() => setMenuOpen(true)} />
        {menuOpen && <DropdownMenu user={user} onLogout={onLogout} onClose={() => setMenuOpen(false)} />}

        <div style={{ flex: 1, overflowY: "auto", WebkitOverflowScrolling: "touch", paddingBottom: "80px" }}>

          {/* BERANDA */}
          {activeTab === 0 && (
            <div>
              <div style={{ background: "#1A0F00", padding: "28px 20px 32px", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: -40, right: -40, width: 140, height: 140, borderRadius: "50%", background: "rgba(200,134,10,0.06)" }} />
                <p style={{ color: "rgba(200,134,10,0.7)", fontSize: "12px", letterSpacing: "2px", margin: "0 0 8px" }}>Halo,</p>
                <h2 style={{ color: "#F5ECD7", fontSize: "26px", margin: "0 0 28px", fontWeight: "300" }}>{user.name}</h2>
                <div style={{ background: "rgba(255,255,255,0.05)", borderRadius: "20px", padding: "22px", border: "1px solid rgba(200,134,10,0.2)" }}>
                  <p style={{ color: "rgba(245,236,215,0.5)", fontSize: "11px", letterSpacing: "2px", margin: "0 0 8px" }}>TOTAL POIN</p>
                  <p style={{ color: "#F5ECD7", fontSize: "52px", fontWeight: "300", margin: "0 0 12px", lineHeight: 1, fontVariantNumeric: "tabular-nums" }}>{user.points.toLocaleString()}</p>
                  {loyaltyRule && <p style={{ color: "rgba(200,134,10,0.7)", fontSize: "12px", margin: 0 }}>+{loyaltyRule.point} poin setiap Rp{Number(loyaltyRule.amount).toLocaleString()} pembelian</p>}
                </div>
              </div>
              <div style={{ padding: "20px" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "16px" }}>
                  {[
                    { label: "Tukar Reward", sub: mokaRewards.length > 0 ? `${mokaRewards.length} reward` : "Kumpulkan poin", tab: 2 },
                    { label: "Menu", sub: `${Object.values(mokaMenu).flat().length || "—"} item`, tab: 1 },
                  ].map((a, i) => (
                    <button key={i} onClick={() => setActiveTab(a.tab)} style={{ background: "#FFF", border: "1px solid #EBEBEB", borderRadius: "16px", padding: "18px 16px", cursor: "pointer", textAlign: "left", WebkitTapHighlightColor: "transparent" }}>
                      <p style={{ margin: "0 0 4px", fontSize: "15px", color: "#1A1A1A", fontWeight: "500" }}>{a.label}</p>
                      <p style={{ margin: 0, fontSize: "12px", color: "#999" }}>{a.sub}</p>
                    </button>
                  ))}
                </div>
                <div style={{ background: "#FFF", borderRadius: "16px", border: "1px solid #EBEBEB", padding: "16px 18px" }}>
                  <p style={{ margin: "0 0 4px", fontSize: "11px", color: "#999", textTransform: "uppercase", letterSpacing: "0.5px" }}>Lokasi</p>
                  <p style={{ margin: 0, fontSize: "14px", color: "#1A1A1A" }}>{OUTLET_ADDRESS}</p>
                </div>
              </div>
            </div>
          )}

          {/* MENU */}
          {activeTab === 1 && (
            <div style={{ padding: "24px 20px" }}>
              <h3 style={{ color: "#1A1A1A", fontSize: "22px", fontWeight: "400", margin: "0 0 20px" }}>Menu</h3>
              {loadingMenu && <p style={{ textAlign: "center", color: "#999", fontSize: "14px" }}>Memuat menu...</p>}
              {Object.entries(mokaMenu).map(([category, items]) => (
                <div key={category} style={{ marginBottom: "24px" }}>
                  <p style={{ fontSize: "11px", letterSpacing: "2px", color: "#C8860A", textTransform: "uppercase", fontWeight: "600", margin: "0 0 10px" }}>{category}</p>
                  <div style={{ background: "#FFF", borderRadius: "16px", border: "1px solid #EBEBEB", overflow: "hidden" }}>
                    {items.map((item, idx) => {
                      const price = item.item_variants?.[0]?.price || 0;
                      const foto = item.image?.url || null;
                      return (
                        <div key={item.id} style={{ display: "flex", alignItems: "center", padding: "12px 18px", borderBottom: idx < items.length - 1 ? "1px solid #F5F5F3" : "none", gap: "12px" }}>
                          {foto && (
                            <img src={foto} alt={item.name} style={{ width: 48, height: 48, borderRadius: "10px", objectFit: "cover", flexShrink: 0 }} onError={e => e.target.style.display = "none"} />
                          )}
                          <div style={{ flex: 1 }}>
                            <p style={{ margin: 0, fontSize: "15px", color: "#1A1A1A" }}>{item.name}</p>
                          </div>
                          {price > 0 && <p style={{ margin: 0, fontSize: "14px", color: "#C8860A", fontWeight: "500", flexShrink: 0 }}>Rp{price.toLocaleString()}</p>}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* REWARD */}
          {activeTab === 2 && (
            <div style={{ padding: "24px 20px" }}>
              <h3 style={{ color: "#1A1A1A", fontSize: "22px", fontWeight: "400", margin: "0 0 6px" }}>Reward</h3>
              <p style={{ color: "#999", fontSize: "14px", margin: "0 0 24px" }}>Poin kamu: <strong style={{ color: "#C8860A" }}>{user.points.toLocaleString()}</strong></p>
              {mokaRewards.length > 0 ? (
                <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                  {mokaRewards.map((v, i) => {
                    const pointsNeeded = v.redeem_point || v.points || 0;
                    const discountAmt = v.discount || 0;
                    const minPurchase = v.min_purchase_amount || 0;
                    const canRedeem = user.points >= pointsNeeded;
                    const isDone = redeemed.includes(i);
                    return (
                      <div key={i} style={{ background: isDone ? "#F5F5F3" : "#1A0F00", borderRadius: "20px", padding: "22px 20px", border: isDone ? "1px solid #EBEBEB" : "none" }}>
                        <p style={{ margin: "0 0 4px", fontSize: "12px", color: isDone ? "#999" : "rgba(200,134,10,0.6)", letterSpacing: "1px" }}>REWARD</p>
                        <p style={{ margin: "0 0 6px", fontSize: "20px", color: isDone ? "#999" : "#F5ECD7", fontWeight: "300" }}>Diskon Rp{discountAmt.toLocaleString()}</p>
                        {minPurchase > 0 && <p style={{ margin: "0 0 18px", fontSize: "13px", color: isDone ? "#AAA" : "rgba(245,236,215,0.5)" }}>Min. pembelian Rp{minPurchase.toLocaleString()}</p>}
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                          <p style={{ margin: 0, fontSize: "14px", color: isDone ? "#AAA" : "#C8860A", fontWeight: "500" }}>{pointsNeeded} poin</p>
                          <button onClick={() => canRedeem && !isDone && setRedeemed([...redeemed, i])} style={{ background: isDone ? "transparent" : canRedeem ? "#C8860A" : "rgba(255,255,255,0.08)", color: isDone ? "#AAA" : canRedeem ? "#FFF" : "rgba(245,236,215,0.3)", border: isDone ? "1px solid #DDD" : "none", borderRadius: "24px", padding: "10px 20px", cursor: canRedeem && !isDone ? "pointer" : "default", fontSize: "13px", fontFamily: "inherit", fontWeight: "500", WebkitTapHighlightColor: "transparent" }}>
                            {isDone ? "Sudah ditukar" : canRedeem ? "Tukar" : `Kurang ${pointsNeeded - user.points} poin`}
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div style={{ background: "#FFF", borderRadius: "16px", border: "1px solid #EBEBEB", padding: "40px 24px", textAlign: "center" }}>
                  <p style={{ color: "#999", fontSize: "14px", margin: "0 0 6px" }}>Belum ada reward tersedia</p>
                  <p style={{ color: "#CCC", fontSize: "13px", margin: 0 }}>Terus kumpulkan poin dari setiap pembelian</p>
                </div>
              )}
            </div>
          )}

          {/* PROMO & EVENT */}
          {activeTab === 3 && (
            <div style={{ padding: "24px 20px" }}>
              <h3 style={{ color: "#1A1A1A", fontSize: "22px", fontWeight: "400", margin: "0 0 20px" }}>Promo & Event</h3>
              {loadingPromo && <p style={{ textAlign: "center", color: "#999", fontSize: "14px" }}>Memuat...</p>}
              {!loadingPromo && promos.length === 0 && (
                <div style={{ background: "#FFF", borderRadius: "16px", border: "1px solid #EBEBEB", padding: "40px 24px", textAlign: "center" }}>
                  <p style={{ color: "#999", fontSize: "14px", margin: 0 }}>Belum ada promo atau event saat ini</p>
                </div>
              )}
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {promos.map((promo, i) => (
                  <div key={i} style={{ background: "#FFF", borderRadius: "20px", overflow: "hidden", border: "1px solid #EBEBEB" }}>
                    {promo.gambar_url && (
                      <img src={promo.gambar_url} alt={promo.judul} style={{ width: "100%", height: "180px", objectFit: "cover", display: "block" }} onError={e => e.target.style.display = "none"} />
                    )}
                    {!promo.gambar_url && (
                      <div style={{ height: "120px", background: "linear-gradient(135deg, #1A0F00, #5C2D0A)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <span style={{ color: "rgba(200,134,10,0.5)", fontSize: "11px", letterSpacing: "3px" }}>{promo.tipe?.toUpperCase() || "PROMO"}</span>
                      </div>
                    )}
                    <div style={{ padding: "16px 18px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
                        <span style={{ background: promo.tipe === "event" ? "#F0F5FF" : "#FFF8F0", color: promo.tipe === "event" ? "#2255CC" : "#C8860A", fontSize: "10px", fontWeight: "600", letterSpacing: "1px", padding: "3px 8px", borderRadius: "6px", textTransform: "uppercase" }}>{promo.tipe || "promo"}</span>
                      </div>
                      <p style={{ margin: "0 0 6px", fontSize: "16px", color: "#1A1A1A", fontWeight: "500" }}>{promo.judul}</p>
                      {promo.deskripsi && <p style={{ margin: "0 0 12px", fontSize: "14px", color: "#666", lineHeight: 1.6 }}>{promo.deskripsi}</p>}
                      {(promo.tanggal_mulai || promo.tanggal_selesai) && (
                        <p style={{ margin: 0, fontSize: "12px", color: "#999" }}>
                          {promo.tanggal_mulai === promo.tanggal_selesai
                            ? formatDate(promo.tanggal_mulai)
                            : `${formatDate(promo.tanggal_mulai)} – ${formatDate(promo.tanggal_selesai)}`}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Bottom Nav */}
        <div style={{ position: "fixed", bottom: 0, left: "50%", transform: "translateX(-50%)", width: "100%", maxWidth: "430px", background: "#FFF", borderTop: "1px solid #EBEBEB", display: "flex", paddingBottom: "env(safe-area-inset-bottom, 8px)", zIndex: 10 }}>
          {tabs.map((tab, i) => (
            <button key={i} onClick={() => setActiveTab(i)} style={{ flex: 1, background: "none", border: "none", padding: "12px 4px 10px", cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", gap: "5px", WebkitTapHighlightColor: "transparent" }}>
              <span style={{ color: activeTab === i ? "#C8860A" : "#CCC" }}>{tabIcons[i]}</span>
              <span style={{ fontSize: "10px", fontFamily: "inherit", color: activeTab === i ? "#C8860A" : "#CCC", fontWeight: activeTab === i ? "600" : "400" }}>{tab}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [screen, setScreen] = useState("splash");
  const [user, setUser] = useState(null);
  if (screen === "splash") return <SplashScreen onDone={() => setScreen("login")} />;
  if (screen === "login") return <LoginScreen onLogin={u => { setUser(u); setScreen("app"); }} />;
  return <MainApp user={user} onLogout={() => { setUser(null); setScreen("login"); }} />;
}
