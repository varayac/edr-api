import db from '../database/db.js'
import { DataTypes } from 'sequelize'

// Model Table Clients
export const ClientModel = db.define('clients', {
  id: { type: DataTypes.INTEGER, primaryKey: true },
  rut: { type: DataTypes.CHAR },
  name: { type: DataTypes.STRING },
  direction: { type: DataTypes.STRING },
  createdAt: { type: DataTypes.DATE },
  updatedAt: { type: DataTypes.DATE }
})

// Model Table Providers
export const ProviderModel = db.define('providers', {
  id: { type: DataTypes.INTEGER, primaryKey: true },
  rut: { type: DataTypes.CHAR },
  name: { type: DataTypes.STRING },
  direction: { type: DataTypes.STRING },
  createdAt: { type: DataTypes.DATE },
  updatedAt: { type: DataTypes.DATE }
})

// Model Table Products
export const ProductModel = db.define('products', {
  id: { type: DataTypes.INTEGER, primaryKey: true },
  name: { type: DataTypes.STRING },
  code: { type: DataTypes.STRING },
  price: { type: DataTypes.NUMBER },
  amount: { type: DataTypes.NUMBER },
  status: { type: DataTypes.INTEGER },
  createdAt: { type: DataTypes.DATE },
  updatedAt: { type: DataTypes.DATE }
})

// Model Table Invoice
export const InvoiceModel = db.define('invoices', {
  id: { type: DataTypes.INTEGER, primaryKey: true },
  number: { type: DataTypes.INTEGER },
  createdAt: { type: DataTypes.DATE },
  type: { type: DataTypes.STRING },
  total: { type: DataTypes.NUMBER },
  id_client: { type: DataTypes.INTEGER },
  id_provider: { type: DataTypes.INTEGER }
}, { timestamps: false })

// Model Table Purchases
export const PurchaseModel = db.define('purchases', {
  id: { type: DataTypes.INTEGER, primaryKey: true },
  units: { type: DataTypes.INTEGER },
  id_invoice: { type: DataTypes.INTEGER },
  id_product: { type: DataTypes.INTEGER },
  subtotal: { type: DataTypes.DOUBLE },
  createdAt: { type: DataTypes.DATE }
}, { timestamps: false })

// Model Table Sales
export const SaleModel = db.define('sales', {
  id: { type: DataTypes.INTEGER, primaryKey: true },
  units: { type: DataTypes.INTEGER },
  id_invoice: { type: DataTypes.INTEGER },
  id_product: { type: DataTypes.INTEGER },
  subtotal: { type: DataTypes.DOUBLE },
  createdAt: { type: DataTypes.DATE }
}, { timestamps: false })

/* REFERENCES */

// Reference 1:n Client hasMany Invoices && Invoices belongsTo Client
ClientModel.hasMany(InvoiceModel, { foreignKey: 'id_client', sourceKey: 'id' })
InvoiceModel.belongsTo(ClientModel, { foreignKey: 'id_client', targetKey: 'id' })

// Reference 1:n Provider hasMany Invoices && Invoices belongsTo Provider
ProviderModel.hasMany(InvoiceModel, { foreignKey: 'id_provider', sourceKey: 'id' })
InvoiceModel.belongsTo(ProviderModel, { foreignKey: 'id_provider', targetKey: 'id' })

// Reference 1:n Invoices hasMany Purchases && Pruchases belongsTo Invoice
InvoiceModel.hasMany(PurchaseModel, { foreignKey: 'id_invoice', sourceKey: 'id' })
PurchaseModel.belongsTo(InvoiceModel, { foreignKey: 'id_invoice', targetKey: 'id' })

// Reference 1:n Invoices hasMany Sales && Sales belongsTo Invoice
InvoiceModel.hasMany(SaleModel, { foreignKey: 'id_invoice', sourceKey: 'id' })
SaleModel.belongsTo(InvoiceModel, { foreignKey: 'id_invoice', targetKey: 'id' })

// Reference 1:n Product hasMany Purchases && Purchases belongsTo Product
ProductModel.hasMany(PurchaseModel, { foreignKey: 'id_product', sourceKey: 'id' })
PurchaseModel.belongsTo(ProductModel, { foreignKey: 'id_product', targetKey: 'id' })

// Reference 1:n Product hasMany Sales && Sales belongsTo Product
ProductModel.hasMany(SaleModel, { foreignKey: 'id_product', sourceKey: 'id' })
SaleModel.belongsTo(ProductModel, { foreignKey: 'id_product', targetKey: 'id' })
