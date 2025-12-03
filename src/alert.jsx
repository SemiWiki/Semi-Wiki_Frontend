/*
  각 공지사항은 id, title, message, type 속성을 포함합니다.
  type 속성은 공지사항의 중요도를 나타내며, "normal", "urgent" 중 하나의 값을 가질 수 있습니다.

  예시
  [
    {
      "id": "1",
      "title": "일반 공지",
      "message": "내일부터 글 작성 UI가 개편됩니다.",
      "type": "normal"
    },
    {
      "id": "2",
      "title": "긴급 점검 안내",
      "message": "현재 서버 과부하로 긴급 점검이 진행 중입니다.",
      "type": "urgent"
    }
  ]
*/

export async function showAlerts(token) {
  const API_BASE = import.meta.env.VITE_REACT_APP_API_BASE_URL;

  try {
    const now = new Date().toLocaleString();
    const res = await fetch(`${API_BASE}/notice`, { method: "GET" });

    const alerts = await res.json();

    if (!Array.isArray(alerts) || alerts.length === 0) return;

    const viewed = JSON.parse(localStorage.getItem("viewedAlerts") || "[]");
    const pendingAlerts = alerts.filter((alert) => !viewed.includes(alert.id));

    if (pendingAlerts.length === 0) return;

    console.log(`[공지 조회 성공] 총 ${pendingAlerts.length}개, 시간=${now}`);
    console.log("[서버 응답 JSON]", alerts);

    for (const alert of pendingAlerts) {
      await new Promise((resolve) => {
        createAlertPopup(alert.title, alert.contents, alert.type, resolve);
      });

      viewed.push(alert.id);
      localStorage.setItem("viewedAlerts", JSON.stringify(viewed));
    }
  } catch (err) {
    console.error(`[공지 조회 오류] ${err.message}`);
  }
}

function createAlertPopup(title, message, type = "normal", onClose) {
  const container = document.createElement("div");

  const typeStyles = {
    normal: {
      buttonColor: "#FF9E3D",
      hirightColor: "#FF9E3D",
    },
    urgent: {
      buttonColor: "#FF9E3D",
      hirightColor: "#FF9E3D",
    },
  };

  const { buttonColor, hirightColor } = typeStyles[type] || typeStyles.normal;

  const formattedMessage = message.replace(
    /<hiright>(.*?)<\/hiright>/gs,
    `<span style="color: ${hirightColor}; font-weight: bold;">$1</span>`
  );

  container.innerHTML = `
  <div
    style="
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: rgba(0, 0, 0, 0.3);
      backdrop-filter: blur(4px);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 9999;
    "
  >
    <div
      style="
        padding: 20px;
        min-width: 600px;
        min-height: 400px;
        background: #353535;
        border-radius: 12px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.15);
        font-family: pretendard, sans-serif;
        z-index: 10000;
      "
    >
      <h3 
        style="
          margin: 0 0 10px; 
          font-weight: bold; 
          font-size: 28px;
          color: #FFFFFF;
        "
      >
        ${title}
      </h3>

      <p 
        style="
          margin: 20px 20px 20px; 
          font-size: 19px; 
          line-height: 1.5; 
          min-height: 300px;
          white-space: pre-line;
          color: #FFFFFF;
        "
      >
        ${formattedMessage}
      </p>

      <button
        id="alert-close-btn"
        style="
          width: 100%;
          padding: 12px;
          background: ${buttonColor};
          color: white;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          font-size: 17px;
        "
      >
        확인
      </button>
    </div>
  </div>
  `;

  document.body.appendChild(container);

  container.querySelector("#alert-close-btn").onclick = () => {
    container.remove();
    if (onClose) onClose();
  };
}
