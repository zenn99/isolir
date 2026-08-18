// Konfigurasi Supabase dengan URL dan Anon Key Anda
const SUPABASE_URL = 'https://vljvulbjxhuysesronog.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZsanZ1bGJqeGh1eXNlc3Jvbm9nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODcwMjgyOTcsImV4cCI6MjEwMjYwNDI5N30.yPq1kySc9iPuOdS_eCWGRc60gUoklNqc2YRLQ7ILCIk';

// Inisialisasi Supabase Client
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Fungsi test koneksi (Opsional, untuk memastikan Supabase terhubung)
async function checkConnection() {
    console.log("Menghubungkan ke Supabase...");
    const { data, error } = await supabase.from('customers').select('*').limit(1);
    if (error) {
        console.error("Error koneksi Supabase:", error.message);
    } else {
        console.log("Supabase Berhasil Terhubung! Data:", data);
    }
}

// Jalankan test koneksi
checkConnection();
