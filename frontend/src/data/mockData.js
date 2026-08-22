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

export const currentInvoice = {
    period: "Tháng 08/2026",
    dueDate: "05/09/2026",
    status: "Pending",
    items: [
        { label: "Tiền thuê phòng", amount: 3500000 },
        { label: "Tiền điện (Chỉ số: 1250 - 1450)", amount: 450000 },
        { label: "Tiền nước (Chỉ số: 45 - 55)", amount: 120000 },
        { label: "Phí quản lý & Rác", amount: 150000 },
    ],
    total: 4220000,
};

export const invoiceHistory = [
    { period: "07/2026", total: 4150000, paidDate: "04/08/2026", status: "Paid" },
    { period: "06/2026", total: 4200000, paidDate: "03/07/2026", status: "Paid" },
    { period: "05/2026", total: 3980000, paidDate: "05/06/2026", status: "Paid" },
    { period: "04/2026", total: 4100000, paidDate: "04/05/2026", status: "Paid" },
    { period: "03/2026", total: 4050000, paidDate: "03/04/2026", status: "Paid" },
];

export const bankInfo = {
    bankName: "MB Bank",
    accountNumber: "0987654321",
    accountName: "V-RENTALS MANAGEMENT",
    transferContent: "BILL_T08_2026_P301",
};

export const maintenanceData = [
    { id: "REQ-015", issue: "Điều hòa không mát", date: "15/07/2026", status: "Resolved" },
    { id: "REQ-016", issue: "Bóng đèn nhà tắm hỏng", date: "05/08/2026", status: "Pending" },
];
