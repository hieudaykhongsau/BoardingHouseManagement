export const tenantData = {
  name: "Nguyễn Văn An",
  roomNumber: "Phòng 301",
  floor: "Tầng 3",
  area: "25m²",
  address: "123 Nguyễn Trãi, Quận 1, TP.HCM",
  landlord: "Trần Thị Mai",
  landlordPhone: "0901 234 567",
  leaseStart: "01/01/2026",
  leaseEnd: "31/12/2026",
  monthlyRent: 3500000,
  utilities: {
    electric: 450000,
    water: 120000,
    internet: 100000,
    service: 50000
  },
  notifications: 3,
};

export const invoicesData = [
  { id: "INV-2608", date: "01/08/2026", type: "Tiền phòng & Dịch vụ", amount: 4220000, status: "Pending" },
  { id: "INV-2607", date: "01/07/2026", type: "Tiền phòng & Dịch vụ", amount: 4150000, status: "Paid" },
  { id: "INV-2606", date: "01/06/2026", type: "Tiền phòng & Dịch vụ", amount: 4200000, status: "Paid" },
];

export const maintenanceData = [
  { id: "REQ-015", issue: "Điều hòa không mát", date: "15/07/2026", status: "Resolved" },
  { id: "REQ-016", issue: "Bóng đèn nhà tắm hỏng", date: "05/08/2026", status: "Pending" },
];
