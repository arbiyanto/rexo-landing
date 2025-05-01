# Product Requirements Document: Rexo App and Backend

**Version:** 1.0
**Date:** 28-04-2025
**Authors:** Arbiyanto Wijaya

## 1. Introduction

Rexo App is a mobile application designed to serve the specific needs of rental businesses (`Bisnis Rental`) and rental communities (`Komunitas Rental`) in Indonesia. The primary goal is to enhance security and trust within the rental ecosystem by providing tools for **verifying the identity of potential renters** (using e-KTP, NPWP via third-party integration) and maintaining shared blacklists of problematic renters within specific communities. The app aims to foster collaboration between rental providers within and across multiple communities they join, enabling them to share crucial information and mitigate risks associated with defaults, damages, or theft, respecting the boundaries of each community's data.

The backend will be developed using the Laravel framework, providing robust APIs, while the frontend mobile application will be built using Flutter for cross-platform compatibility (iOS & Android) with a user interface inspired by the Gojek design system.

## 2. Goals & Objectives

-   **Reduce Rental Fraud & Loss:** Provide a mechanism for rental businesses to identify potentially high-risk renters through community-specific blacklists and **renter identity verification**.
-   **Enhance Trust & Collaboration:** Facilitate information sharing within and potentially across joined rental communities, based on user membership.
-   **Streamline Renter Vetting:** Offer tools for identity verification and background checks (via community blacklists).
-   **Build Secure Communities:** Enable communities to manage their members and maintain exclusivity through invitation codes, allowing users to participate in multiple relevant networks.
-   **Provide Actionable Insights:** Utilize analytics to understand user behavior and improve the application.

## 3. User Roles

1.  **Bisnis Rental (Rental Business):** Individual businesses or entities that rent out assets. They can join multiple communities via invitation codes. They can access core features like searching blacklists (across joined communities), adding blacklist entries (to a specific joined community), verifying identity, managing their profile, and potentially inviting others if granted privileges within a specific community.
2.  **Komunitas Rental (Rental Community Role/Privilege):** This is less a distinct user type and more a set of privileges _within a specific community_. A `Bisnis Rental` user might be granted `Komunitas Rental` privileges (e.g., 'Admin', 'Moderator') within one or more communities they belong to. Users with these privileges _for a specific community_ have the additional ability to generate invitation codes _for that community_.

## 4. Functional Requirements

This section details the specific features and functionalities of the Rexo App.

### 4.1 Core Features (Accessible by: Bisnis Rental, Komunitas Rental)

-   **4.1.1.1 Registration:**

    -   **Description:** New users register using a unique invitation code. Redeeming a code grants membership _to the specific community associated with that code_. This establishes the user's initial community membership.


#### 4.1.2 Renter Identity Verification (e-KTP & Selfie via Iluma.ai) - REVISED

-   **Description:** Allows authenticated Rexo users (`Bisnis Rental`) to verify the identity of a potential renter (an individual _outside_ the Rexo system) by submitting the renter's e-KTP details, KTP photo, and a selfie photo (provided by the renter to the Rexo user). This utilizes the Iluma.ai API for validation and face matching, providing a risk assessment tool. **Note:** This feature requires the Rexo user performing the check to have sufficient points in their wallet and to **confirm they have obtained the renter's explicit consent** for this verification.

#### 4.1.3 Blacklist Management (Multi-Community Context)

-   **Description:** Users can contribute to and search blacklist databases. Adding an entry requires specifying _which_ community the entry belongs to from the communities they are a member of. Searching queries across _all_ communities the user is a member of, with clear indication of the entry's origin community and filtering options.

#### 4.1.4 Deposit System (Points via Xendit QRIS) - Refined

-   **Description:** Users top up their point balance by generating a dynamic QRIS code via Xendit and paying the specified amount using their preferred banking/e-wallet app. The successful payment automatically updates their Rexo point balance based on the configured conversion rate.
#### 4.1.7 Push Notifications (Firebase Cloud Messaging)

-   **Description:** Implement Firebase Cloud Messaging (FCM) to send targeted push notifications to users for important events, enhancing engagement and providing real-time updates.
-   **Notification Events (Triggered by Backend):**
    -   **Top-Up Success:**
        -   **Trigger:** Successful Xendit callback processing.
        -   **Target:** Specific user who initiated the top-up.
        -   **Content:** `Top Up Berhasil!`, `Saldo [Y] Poin telah ditambahkan ke akun Rexo Anda.`
        -   **Action:** Tapping the notification should open the app, ideally navigating to the Wallet/Balance screen.
    -   **Verification Status Update:**
        -   **Trigger:** KTP/NPWP verification process completes (success or failure).
        -   **Target:** Specific user who submitted verification.
        -   **Content (Success):** `Verifikasi KTP Berhasil!`, `Selamat! Akun Anda sekarang terverifikasi.`
        -   **Content (Failure):** `Verifikasi KTP Gagal`, `Silakan cek detail di aplikasi dan coba lagi.`
        -   **Action:** Tapping should open the app, navigating to the Profile or Verification status screen.
    -   **(Revised) New Blacklist Entry in Community:** - **Trigger:** User adds entry to Community X. - **Target:** Other active members of Community X (respect user's notification settings). - **Content:** `Data Daftar Hitam Baru di [Nama Komunitas X]`, `[Nama Pengirim] menambahkan data baru.` - **Action:** Open app, navigate to entry details (requires check user is still member of Community X).
    -   **New Comment on Your Blacklist Entry:**
        -   **Trigger:** User comments on entry Y (belonging to Community Z).
        -   **Target:** Original submitter of entry Y (respect settings).
        -   **Content:** `Komentar Baru di Data Anda ([Nama Komunitas Z])`, `[Nama Komentar] mengomentari data [Nama Diblacklist].`
        -   **Action:** Open app, navigate to entry details (requires check user is still member of Community Z).
    -   **Admin Broadcast Messages:** (Requires Admin Dashboard feature)
        -   **Trigger:** Admin sends a broadcast message (e.g., important announcement, maintenance notice).
        -   **Target:** All users, or users in specific communities.
        -   **Content:** Defined by the admin.
        -   **Action:** Opens the app (potentially to a dedicated inbox or the home screen).
    -   **(NEW) Joined New Community:**
        -   **Trigger:** User successfully joins a new community via code.
        -   **Target:** The user who just joined.
        -   **Content:** `Selamat Bergabung!`, `Anda kini menjadi anggota Komunitas [Nama Komunitas Baru].`
        -   **Action:** Open app, navigate to the "My Communities" screen.
    -   **(NEW) Renter Verification Completed:**
        -   **Trigger:** Backend completes a renter verification attempt (success or failure).
        -   **Target:** The Rexo user who initiated the verification.
        -   **Content (Success):** `Verifikasi Penyewa Berhasil`, `Data KTP penyewa [NIK Masked] cocok.`
        -   **Content (Failure):** `Verifikasi Penyewa Gagal`, `Data KTP penyewa [NIK Masked] tidak cocok/tidak ditemukan. Cek detail di riwayat.`

### 4.2 Community Features (Accessible by: Komunitas Rental)

#### 4.2.1 Invite New Members

-   **Description:** Users designated with `Komunitas Rental` privileges can generate unique invitation codes to onboard new members into the app and automatically associate them with their community


# Pricing

Harga dapat berubah sewaktu-waktu, ini hanya harga permulaan.

## Verification Renter Identity (Biometrics) pricing
- Rp 11.000 / Verifikasi
- Additional NPWP verification Rp 4.000 / Verifikasi

## Premium Features
- Including blacklist, coming soon premium features.
- Free in Beta Version.

