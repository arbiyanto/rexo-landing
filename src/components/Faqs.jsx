import { Container } from '@/components/Container'

const faqs = [
  [
    {
      question: 'Apa itu Rexo?',
      answer:
        'Rexo adalah aplikasi yang membantu bisnis rental di Indonesia untuk memverifikasi identitas penyewa potensial dan berbagi informasi mengenai penyewa bermasalah melalui komunitas rental.',
    },
    {
      question: 'Bagaimana cara kerja verifikasi e-KTP dan selfie?',
      answer:
        'Kami menggunakan teknologi biometrik canggih untuk memverifikasi keaslian e-KTP dan mencocokkan foto selfie dengan foto di e-KTP. Proses ini membutuhkan persetujuan dari penyewa dan menghabiskan sejumlah poin dari akun Anda.',
    },
  ],
  [
    {
      question: 'Apakah data yang saya tambahkan ke daftar hitam dapat dilihat oleh semua pengguna?',
      answer:
        'Tidak. Data daftar hitam hanya dapat dilihat oleh anggota komunitas tempat data tersebut ditambahkan. Jika Anda bergabung dengan beberapa komunitas, Anda dapat melihat data dari semua komunitas yang Anda ikuti.',
    },
    {
      question: 'Bagaimana cara menambah poin di akun saya?',
      answer:
        'Anda dapat menambah poin melalui sistem top-up menggunakan QRIS yang terintegrasi dengan Xendit. Poin ini dapat digunakan untuk layanan verifikasi KTP dan NPWP.',
    },
  ],
  [
    {
      question: 'Bagaimana cara bergabung dengan komunitas?',
      answer:
        'Untuk bergabung dengan komunitas, Anda memerlukan kode undangan dari admin komunitas tersebut. Setelah mendaftar, Anda akan secara otomatis masuk ke komunitas pertama Anda. Untuk bergabung dengan komunitas tambahan, gunakan kode undangan yang diberikan.',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faqs"
      aria-labelledby="faqs-title"
      className="border-t border-gray-200 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faqs-title"
            className="text-3xl font-medium tracking-tight text-gray-900"
          >
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            Jika Anda memiliki pertanyaan lain,{' '}
            <a
              href="mailto:admin@rexo.meduru.app"
              className="text-gray-900 underline"
            >
              hubungi kami
            </a>
            .
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="space-y-10">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="text-lg/6 font-semibold text-gray-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-gray-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
