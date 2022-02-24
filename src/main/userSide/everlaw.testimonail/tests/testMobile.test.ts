import { test } from "@playwright/test"

const { _android: android } = require('playwright');

test ("Mobile", async () => {
  // Connect to the device.
  const [device] = await android.devices();
  console.log(`Model: ${device.model()}`);
  console.log(`Serial: ${device.serial()}`);
});