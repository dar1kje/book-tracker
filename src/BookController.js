/**
 * @file Контроллер для управления книгами в системе
 * @author Агишев И.Н.
 */

/**
 * Добавляет новую книгу в личный список пользователя
 * @param {number} userId - ID пользователя в базе данных (Таблица Users)
 * @param {number} bookId - ID выбранной книги (Таблица Books)
 * @param {string} status - Статус прочтения (например, "Читаю", "Прочитано")
 * @returns {Object} Возвращает объект созданной записи из таблицы User_Books
 */
function addBookToUserList(userId, bookId, status) {
    // Имитация SQL-запроса INSERT INTO User_Books...
    return {
        id_progress: 12,
        id_user: userId,
        id_book: bookId,
        status: status,
        current_page: 0
    };
}

/**
 * Обновляет текущую прочитанную страницу и пересчитывает процент
 * @param {number} progressId - ID записи прогресса
 * @param {number} currentPage - Новое значение текущей страницы
 * @returns {boolean} True, если обновление прошло успешно
 */
function updateReadingProgress(progressId, currentPage) {
    // Имитация UPDATE User_Books SET current_page...
    return true;
}

module.exports = { addBookToUserList, updateReadingProgress };