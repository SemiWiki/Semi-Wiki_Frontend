/*
  alert.json을 생성후 해당 파일을 public 폴더에 위치시켜야 합니다.
  공지사항 데이터를 담고 있는 JSON 파일입니다.
  각 공지사항은 id, title, message, type 속성을 포함합니다.
  type 속성은 공지사항의 중요도를 나타내며, "normal", "urgent", "warning" 중 하나의 값을 가질 수 있습니다.

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

export async function showAlerts() {
  try {
    const res = await fetch("/alert.json");
    const alerts = await res.json();

    if (!Array.isArray(alerts) || alerts.length === 0) return;

    const viewed = JSON.parse(localStorage.getItem("viewedAlerts") || "[]");
    const pendingAlerts = alerts.filter((alert) => !viewed.includes(alert.id));

    if (pendingAlerts.length === 0) return;

    for (const alert of pendingAlerts) {
      await new Promise((resolve) => {
        createAlertPopup(alert.title, alert.message, alert.type, resolve);
      });

      viewed.push(alert.id);
      localStorage.setItem("viewedAlerts", JSON.stringify(viewed));
    }
  } catch (err) {
    console.error("알림 로드 실패:", err);
  }
}

function createAlertPopup(title, message, type = "normal", onClose) {
  const container = document.createElement("div");

  const typeStyles = {
    normal: {
      buttonColor: "#007bff",
      titleColor: "#0056b3",
    },
    urgent: {
      buttonColor: "#d32f2f",
      titleColor: "#b71c1c",
    },
    warning: {
      buttonColor: "#ffa000",
      titleColor: "#ff8f00",
    },
  };

  const { buttonColor, titleColor } = typeStyles[type] || typeStyles.normal;

  container.innerHTML = `
    <div
      style="
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 20px;
        min-width: 600px;
        min-height: 400px;
        background: white;
        border-radius: 10px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.15);
        z-index: 10000;
        font-family: pretendard, sans-serif;
      "
    >
      <h3 
        style="
          margin: 0 0 10px; 
          font-weight: bold; 
          font-size: 24px;
          color: ${titleColor};
        "
      >
        ${title}
      </h3>

      <p 
        style="
          margin: 30px 20px 20px; 
          font-size: 18px; 
          line-height: 1.5; 
          min-height: 300px;
          white-space: pre-line;
        "
      >
        ${message}
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
  `;

  document.body.appendChild(container);

  container.querySelector("#alert-close-btn").onclick = () => {
    container.remove();
    if (onClose) onClose();
  };
}
