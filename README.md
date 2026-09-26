# TASKFLOW API

TASKFLOW, Node.js ve Express.js kullanılarak geliştirilmiş bir görev yönetimi REST API projesidir.

## Projenin Amacı

Bu projenin amacı, bir yazılım şirketindeki ekip görevlerinin API üzerinden yönetilmesini sağlamaktır.

Sistem üzerinden görevler:

* Oluşturulabilir
* Listelenebilir
* Detayları görüntülenebilir
* Güncellenebilir
* Silinebilir

Görevlerde başlık, açıklama, durum, öncelik ve atanan çalışan bilgileri tutulmaktadır.

## Kullanılan Teknolojiler

* Node.js
* Express.js
* JavaScript
* Postman
* REST API
* JSON

## Kurulum

Projeyi bilgisayarınıza aldıktan sonra terminali TASKFLOW klasöründe açın.

### 1. Bağımlılıkları yükleyin

```bash
npm install
```

### 2. Sunucuyu başlatın

```bash
npm start
```

Sunucu başarılı şekilde başlatıldığında:

```text
Sunucu 3000 portunda çalışıyor
```

mesajı görüntülenir.

API adresi:

```text
http://localhost:3000
```

## API Endpointleri

| Method | Endpoint         | Açıklama                             |
| ------ | ---------------- | ------------------------------------ |
| GET    | `/api/tasks`     | Tüm görevleri listeler               |
| GET    | `/api/tasks/:id` | Belirli bir görevin detayını getirir |
| POST   | `/api/tasks`     | Yeni görev oluşturur                 |
| PUT    | `/api/tasks/:id` | Görevi günceller                     |
| DELETE | `/api/tasks/:id` | Görevi siler                         |

## POST Örneği

Yeni görev oluşturmak için:

```http
POST /api/tasks
```

Body:

```json
{
  "title": "Login sayfasının geliştirilmesi",
  "description": "Kullanıcı giriş ekranı hazırlanacak.",
  "status": "todo",
  "priority": "high",
  "assignedTo": 1
}
```

## Middleware

Projede gelen HTTP isteklerini terminalde görüntüleyen Logger Middleware kullanılmıştır.

Örnek terminal çıktısı:

```text
GET /api/tasks
```

Ayrıca Express'in `express.json()` middleware'i kullanılarak JSON formatındaki istek gövdelerinin okunması sağlanmıştır.

## Proje Yapısı

```text
TASKFLOW
│
├── src
│   ├── app.js
│   └── routes
│       └── taskRoutes.js
│
├── package.json
├── package-lock.json
└── README.md
```

## Test

API işlemleri Postman kullanılarak test edilmiştir.

Test edilen işlemler:

* Görev ekleme
* Görev listeleme
* Görev detayı görüntüleme
* Görev güncelleme
* Görev silme
* Logger Middleware kontrolü

Test sonuçlarını gösteren Postman ekran görüntüleri proje teslim dosyalarına eklenmiştir.
