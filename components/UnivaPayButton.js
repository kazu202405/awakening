import { useEffect } from "react";

/**
 * UnivaPay決済ボタンコンポーネント
 *
 * appId: UnivaPayの管理画面 > アプリトークンから取得
 * appIdが空の場合は「準備中」ボタンを表示
 */
export default function UnivaPayButton({
  appId,
  amount,
  currency = "jpy",
  productName,
  productDescription = "",
  subscriptionPeriod,
  className = "plan-btn",
  label = "お申し込み",
}) {
  // appIdが設定されている場合のみSDKを読み込む
  useEffect(() => {
    if (!appId) return;
    if (document.querySelector('script[src*="univapay"]')) return;

    const script = document.createElement("script");
    script.src = "https://widget.univapay.com/client/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, [appId]);

  // appIdが未設定の場合は「準備中」表示
  if (!appId) {
    return (
      <button className={className} disabled>
        準備中
      </button>
    );
  }

  const dataAttrs = {
    "data-app-id": appId,
    "data-checkout": "payment",
    "data-amount": amount,
    "data-currency": currency,
    "data-product-names": productName,
  };

  if (productDescription) {
    dataAttrs["data-product-descriptions"] = productDescription;
  }

  if (subscriptionPeriod) {
    dataAttrs["data-checkout"] = "subscription";
    dataAttrs["data-subscription-period"] = subscriptionPeriod;
  }

  return (
    <span
      className={`univapay-payment-button ${className}`}
      {...dataAttrs}
      style={{ cursor: "pointer" }}
    >
      {label}
    </span>
  );
}
